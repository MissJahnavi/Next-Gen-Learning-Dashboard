CREATE TABLE IF NOT EXISTS courses (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  progress integer NOT NULL CHECK (progress >= 0 AND progress <= 100),
  icon_name text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE courses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access on courses"
  ON courses
  FOR SELECT
  TO anon
  USING (true);

INSERT INTO courses (title, progress, icon_name) VALUES
  ('Advanced React Patterns',        75, 'Layers'),
  ('Machine Learning Fundamentals',  45, 'Brain'),
  ('System Design & Architecture',   30, 'Network'),
  ('TypeScript Deep Dive',           60, 'Code2');

SELECT id, title, progress, icon_name, created_at
FROM courses
ORDER BY created_at ASC;
