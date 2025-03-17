export interface UserResponse {
  email: string;
  roles: string[];
  token: string;
  refreshToken: string;
}

export interface UserLoginRequest {
  email: string;
  password: string;
}

export interface UserRegisterRequest {
  nickname: string;
  email: string;
  password: string;
}
