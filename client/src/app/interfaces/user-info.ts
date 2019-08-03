import { Cat } from './cat';

export interface UserInfo {
  id: number;
  iat: number;
  exp: number;
  userName: string;
  firstName?: string;
  lastName?: string;
  email: string;
  gender?: string;
  phone?: number;
  bio?: string;
  prof_url?: string;
  pwd?: string;
  postOwnerProfUrl?: string;
  postOwnerName?: string;
}

export interface MegaUserInfo {
  id: number;
  iat: number;
  exp: number;
  userName: string;
  firstName?: string;
  lastName?: string;
  email: string;
  gender?: string;
  phone?: number;
  bio?: string;
  prof_url?: string;
  pwd?: string;
  cats?: Cat[];
  following?: UserInfo[];
  follower?: UserInfo[];
}

export interface TokenResponse {
  token: string;
}

export interface TokenPayload {
  email: string;
  password: string;
  username?: string;
}
