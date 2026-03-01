-- Tabela para cadastro de igrejas que desejam receber a RVL Culture
-- Executar no Supabase SQL Editor

CREATE TABLE IF NOT EXISTS rvl_culture_churches (
  id            BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  nome_igreja   TEXT        NOT NULL,
  nome_pastor   TEXT        NOT NULL,
  email         TEXT        NOT NULL,
  telefone      TEXT        NOT NULL,
  cidade        TEXT        NOT NULL,
  bairro        TEXT,
  media_frequentadores INTEGER,
  mensagem      TEXT,
  data_cadastro TIMESTAMPTZ NOT NULL DEFAULT now(),

  -- Evita cadastro duplicado por e-mail
  CONSTRAINT rvl_culture_churches_email_unique UNIQUE (email)
);

-- Habilitar Row Level Security
ALTER TABLE rvl_culture_churches ENABLE ROW LEVEL SECURITY;

-- Política: qualquer pessoa pode inserir (anon insert)
CREATE POLICY "Allow anonymous insert on rvl_culture_churches"
  ON rvl_culture_churches
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Política: somente leitura para usuários autenticados (admin)
CREATE POLICY "Allow authenticated read on rvl_culture_churches"
  ON rvl_culture_churches
  FOR SELECT
  TO authenticated
  USING (true);

-- Índice para buscas por cidade
CREATE INDEX idx_rvl_culture_churches_cidade ON rvl_culture_churches (cidade);

-- Índice para ordenação por data
CREATE INDEX idx_rvl_culture_churches_data ON rvl_culture_churches (data_cadastro DESC);
