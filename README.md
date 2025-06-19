Live at https://eatoreo.github.io/yoga-hypermedia/

## For development:
Create .env file in root of project with supabase connection variables:
```
NUXT_PUBLIC_SUPABASE_URL="..."
NUXT_PUBLIC_SUPABASE_ANON_KEY="..."
```
```bash
npm install
npm run dev
```
Separate terminal:
```bash
npx @tailwindcss/cli -i ./input.css -o ./public/styles/output.css --watch
```

These are the db tables expected by the client:
```sql
-- WARNING: This schema is for context only and is not meant to be run.
-- Table order and constraints may not be valid for execution.

CREATE TABLE public.blogs (
  id bigint NOT NULL,
  title text NOT NULL UNIQUE,
  author text,
  date date,
  body text,
  image text,
  teaser text,
  highlighted boolean NOT NULL DEFAULT false,
  CONSTRAINT blogs_pkey PRIMARY KEY (id)
);
CREATE TABLE public.classes (
  id bigint NOT NULL,
  title text NOT NULL UNIQUE,
  subtitle text,
  intensity text,
  image text,
  description text,
  schedule text,
  teacherId bigint,
  highlighted boolean NOT NULL DEFAULT false,
  price text DEFAULT '€40'::text,
  CONSTRAINT classes_pkey PRIMARY KEY (id),
  CONSTRAINT classes_teacherId_fkey FOREIGN KEY (teacherId) REFERENCES public.teachers(id)
);
CREATE TABLE public.events (
  title text NOT NULL UNIQUE,
  type text,
  date text NOT NULL,
  duration text,
  description text,
  image text,
  longDescription text,
  detailsImage text,
  location text,
  price text,
  whoIsThisFor text,
  id bigint NOT NULL,
  inquiries jsonb,
  teacherIds jsonb,
  highlighted boolean NOT NULL DEFAULT false,
  CONSTRAINT events_pkey PRIMARY KEY (id)
);
CREATE TABLE public.teachers (
  id bigint NOT NULL,
  name text,
  image text,
  description text,
  email text,
  quote text,
  gender text,
  CONSTRAINT teachers_pkey PRIMARY KEY (id)
);
```
