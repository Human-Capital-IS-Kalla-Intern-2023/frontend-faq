// types.ts
import { QuestionType } from './questionType';

export interface TopicType {
  id: number;
  user_id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
  icon: string | null;
  is_status: number;
  created_at: string;
  updated_at: string;
  questions: QuestionType[];
}

export interface TopicTypeWithUser {
  id: number;
  user_id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
  icon: string | null;
  is_status: number;
  created_at: string;
  updated_at: string;
  questions: QuestionType[];
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
