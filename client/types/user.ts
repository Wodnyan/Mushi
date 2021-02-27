export interface User {
  id: number;
  username: string;
  email: string;
  isAdmin: boolean;
  password?: string;
  avatar?: string;
}
