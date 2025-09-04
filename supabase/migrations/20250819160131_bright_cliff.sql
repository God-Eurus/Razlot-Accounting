/*
  # Create client requests table

  1. New Tables
    - `client_requests`
      - `id` (uuid, primary key)
      - `name` (text, required) - Client full name
      - `email` (text, required) - Client email address
      - `phone` (text, optional) - Client phone number
      - `company` (text, optional) - Client company name
      - `service_requested` (text, required) - Type of service requested
      - `message` (text, required) - Detailed message from client
      - `status` (text, default 'pending') - Request status (pending, in_progress, completed)
      - `notes` (text, optional) - Internal notes for admin use
      - `created_at` (timestamp, default now()) - When request was created

  2. Security
    - Enable RLS on `client_requests` table
    - Add policy for public users to insert their own requests
    - Add policy for authenticated admin users to read/update/delete all requests

  3. Indexes
    - Index on status for faster filtering
    - Index on created_at for chronological ordering
*/

CREATE TABLE IF NOT EXISTS client_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  service_requested text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'in_progress', 'completed')),
  notes text,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE client_requests ENABLE ROW LEVEL SECURITY;

-- Allow public users to insert requests (contact form submissions)
CREATE POLICY "Allow public to submit requests"
  ON client_requests
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Allow authenticated users (admin) to view all requests
CREATE POLICY "Allow admin to view all requests"
  ON client_requests
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users (admin) to update all requests
CREATE POLICY "Allow admin to update all requests"
  ON client_requests
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Allow authenticated users (admin) to delete requests
CREATE POLICY "Allow admin to delete requests"
  ON client_requests
  FOR DELETE
  TO authenticated
  USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_client_requests_status ON client_requests(status);
CREATE INDEX IF NOT EXISTS idx_client_requests_created_at ON client_requests(created_at DESC);