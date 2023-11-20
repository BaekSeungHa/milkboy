import { Response } from "@/types/response";
import { MilkRepository } from "./MilkRepository";
import { milk } from "@/libs/Axios/instance";
import { DrankMilkListResponse } from "@/types/milk/type";

class MilkRepositoryImpl implements MilkRepository {
  public async checkDrankMilk(id: string): Promise<Response> {
    const { data } = await milk.post("/milk", { id });
    return data;
  }

  public async getDrankList(date: string): Promise<DrankMilkListResponse> {
    const { data } = await milk.get(`/milk/users?date=${date}`);
    return data;
  }
}

export default new MilkRepositoryImpl();
