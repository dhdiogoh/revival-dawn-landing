import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import type { Session } from '@supabase/supabase-js';

const Admin = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [ticketUrl, setTicketUrl] = useState('');
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [authError, setAuthError] = useState('');

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!session) { setIsAdmin(false); return; }
    supabase
      .from('profiles')
      .select('role')
      .eq('id', session.user.id)
      .single()
      .then(({ data }) => {
        if (data?.role === 'admin') {
          setIsAdmin(true);
        } else {
          supabase.auth.signOut();
          setAuthError('Acesso negado. Você não tem permissão de admin.');
        }
      });
  }, [session]);

  useEffect(() => {
    if (!isAdmin) return;
    supabase.from('settings').select('key, value').in('key', ['lineup_video_url', 'ticket_url'])
      .then(({ data }) => {
        data?.forEach(row => {
          if (row.key === 'lineup_video_url') setVideoUrl(row.value);
          if (row.key === 'ticket_url') setTicketUrl(row.value);
        });
      });
  }, [isAdmin]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setAuthError('Email ou senha incorretos.');
  };

  const handleLogout = () => supabase.auth.signOut();

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage('');
    const [r1, r2] = await Promise.all([
      supabase.from('settings').update({ value: videoUrl }).eq('key', 'lineup_video_url'),
      supabase.from('settings').update({ value: ticketUrl }).eq('key', 'ticket_url'),
    ]);
    setSaving(false);
    setMessage(r1.error || r2.error ? 'Erro ao salvar.' : 'Salvo com sucesso!');
  };

  if (!session || !isAdmin) {
    return (
      <div className="min-h-screen bg-rvl-creme-bg flex items-center justify-center px-4">
        <form onSubmit={handleLogin} className="bg-white rounded-2xl shadow p-8 w-full max-w-sm flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-center">Admin</h1>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-orange-400"
          />
          {authError && <p className="text-red-500 text-sm">{authError}</p>}
          <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded-lg transition-colors">
            Entrar
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-rvl-creme-bg flex items-center justify-center px-4">
      <form onSubmit={handleSave} className="bg-white rounded-2xl shadow p-8 w-full max-w-lg flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Configurações</h1>
          <button type="button" onClick={handleLogout} className="text-sm text-gray-400 hover:text-gray-600">
            Sair
          </button>
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-sm text-gray-600">URL do vídeo Line Up (YouTube)</label>
          <input
            type="text"
            placeholder="https://www.youtube.com/watch?v=..."
            value={videoUrl}
            onChange={e => setVideoUrl(e.target.value)}
            className="border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-sm text-gray-600">Link do ingresso</label>
          <input
            type="text"
            placeholder="https://www.tiketo.com.br/..."
            value={ticketUrl}
            onChange={e => setTicketUrl(e.target.value)}
            className="border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
        {message && <p className={message.includes('Erro') ? 'text-red-500' : 'text-green-600'}>{message}</p>}
        <button type="submit" disabled={saving} className="bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white font-bold py-2 rounded-lg transition-colors">
          {saving ? 'Salvando...' : 'Salvar'}
        </button>
      </form>
    </div>
  );
};

export default Admin;
