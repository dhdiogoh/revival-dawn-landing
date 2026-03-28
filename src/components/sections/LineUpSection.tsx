import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

const FALLBACK_VIDEO_ID = 'VcetbzdZ5uY';

const extractVideoId = (url: string) => {
  const match = url.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : url;
};

const LineUpSection = () => {
  const [playing, setPlaying] = useState(false);
  const [videoId, setVideoId] = useState(FALLBACK_VIDEO_ID);

  useEffect(() => {
    supabase
      .from('settings')
      .select('value')
      .eq('key', 'lineup_video_url')
      .single()
      .then(({ data }) => {
        if (data?.value) setVideoId(extractVideoId(data.value));
      });
  }, []);

  return (
    <section className="bg-rvl-creme-bg py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {playing ? (
          <iframe
            className="w-full aspect-video rounded-lg"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="Line Up Revival Conference 26"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        ) : (
          <button
            className="relative w-full aspect-video rounded-lg overflow-hidden group"
            onClick={() => setPlaying(true)}
            aria-label="Reproduzir vídeo Line Up"
          >
            <img
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt="Line Up Revival Conference 26"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg viewBox="0 0 24 24" fill="white" className="w-10 h-10 ml-1">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </button>
        )}
      </div>
    </section>
  );
};

export default LineUpSection;
