export interface QuestionDataType {
  id: number;
  user_id: number;
  question: string;
  slug: string;
  answer: string;
  is_status: number;
  created_at: string;
  updated_at: string;
  user: {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
    two_factor_confirmed_at: string | null;
    current_team_id: string | null;
    profile_photo_path: string | null;
    created_at: string;
    updated_at: string;
    profile_photo_url: string;
  };
}
