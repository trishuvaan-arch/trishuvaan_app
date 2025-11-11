/*
  # Add Success Story Field to Reviews

  1. Changes
    - Add `is_success_story` boolean field to reviews table
    - Default to false
    - Allow users to mark their review as a success story
  
  2. Notes
    - This allows users to share their success stories along with reviews
    - Success stories can be displayed separately or highlighted in the reviews section
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'reviews' AND column_name = 'is_success_story'
  ) THEN
    ALTER TABLE reviews ADD COLUMN is_success_story boolean DEFAULT false;
  END IF;
END $$;

CREATE INDEX IF NOT EXISTS idx_reviews_success_story ON reviews(is_success_story, is_approved, created_at DESC);
