import { User } from "./user";

export interface Bug {
  id: number;
  title: string;
  description: string;
  isDuplicate: boolean;
  createdAt: string;
  author?: User;
}
