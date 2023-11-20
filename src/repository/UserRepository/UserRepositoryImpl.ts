import { Response } from "@/types/response";
import { JoinParam, LoginParam, UserRepository } from "./UserRepository";
import { milk } from "@/libs/Axios/instance";
import { LoginResponse } from "@/types/user/type";

class UserRepositoryImpl implements UserRepository {
  public async userJogin(params: JoinParam): Promise<Response> {
    const { data } = await milk.post("/user/join", params);
    return data;
  }

  public async userLogin(params: LoginParam): Promise<LoginResponse> {
    const { data } = await milk.post("/user/login", params);
    return data;
  }
}

export default new UserRepositoryImpl();
