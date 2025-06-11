
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mxcmnuujbqgegtzpugxo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14Y21udXVqYnFnZWd0enB1Z3hvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwOTg4NjgsImV4cCI6MjA2NDY3NDg2OH0.pHC1KQZVEqpG1DJ5mINZIKqJrRg0yRo8MvVfGw6EpCE'

export const supabase = createClient(supabaseUrl, supabaseKey)
