import { User } from "./user";

export interface Project {
  id: number;
  name: string;
  icon?: string;
  owner: User;
}
