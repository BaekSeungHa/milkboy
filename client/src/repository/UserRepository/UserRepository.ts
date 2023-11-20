import { Response } from "@/types/response";
import { LoginResponse } from "@/types/user/type";

export interface UserRepository {
  userLogin(params: LoginParam): Promise<LoginResponse>;
  userJogin(params: JoinParam): Promise<Response>;
}

export interface LoginParam {
  id: string;
  pw: string;
}

export interface JoinParam extends LoginParam {
  name: string;
  info: string;
}
