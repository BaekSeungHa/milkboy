import { DrankMilkListResponse } from "@/types/milk/type";
import { Response } from "@/types/response";

export interface MilkRepository {
  checkDrankMilk(id: string): Promise<Response>;
  getDrankList(date: string): Promise<DrankMilkListResponse>;
}
