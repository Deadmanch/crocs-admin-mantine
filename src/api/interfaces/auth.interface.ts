export interface IRegisterRequest {
  email: string;
  password: string;
  fullName: string;
  role: 'ADMIN';
}

export interface ILoginRequest {
  email: string;
  password: string;
}
