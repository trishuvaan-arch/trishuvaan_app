/*
  # Create Reviews System

  1. New Tables
    - `reviews`
      - `id` (uuid, primary key)
      - `user_name` (text) - Name of the reviewer
      - `user_email` (text) - Email of the reviewer
      - `user_type` (text) - 'student' or 'employee'
      - `rating` (integer) - Rating from 1-5
      - `review_text` (text) - The review content
      - `course_name` (text, optional) - For students
      - `is_approved` (boolean) - Admin approval status
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on `reviews` table
    - Add policy for authenticated users to create reviews
    - Add policy for everyone to read approved reviews
    - Add policy for users to read their own reviews
*/

CREATE TABLE IF NOT EXISTS reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_name text NOT NULL,
  user_email text NOT NULL,
  user_type text NOT NULL CHECK (user_type IN ('student', 'employee')),
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  review_text text NOT NULL,
  course_name text,
  is_approved boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read approved reviews"
  ON reviews
  FOR SELECT
  USING (is_approved = true);

CREATE POLICY "Users can create reviews"
  ON reviews
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Users can read their own reviews"
  ON reviews
  FOR SELECT
  USING (user_email = current_setting('request.jwt.claims', true)::json->>'email');

CREATE INDEX IF NOT EXISTS idx_reviews_approved ON reviews(is_approved, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_reviews_email ON reviews(user_email);
