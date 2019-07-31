export interface UserInfo {
  id: string;
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
}

export interface TokenResponse {
  token: string;
}

export interface TokenPayload {
  email: string;
  password: string;
  username?: string;
}
