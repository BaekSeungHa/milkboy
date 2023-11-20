import { Response } from "../response";

export type UserType = "STUDENT" | "TEACHER";

export interface LoginResponse extends Response {
  data: {
    id: string;
    name: string;
    pw: string;
    info: string;
    userRole: UserType;
  };
}
