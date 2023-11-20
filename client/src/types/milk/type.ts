import { UserType } from "../user/type";

export interface DrankMilkListResponse {
  data: [
    {
      user: {
        id: string;
        name: string;
        pw: string;
        info: string;
        userRole: UserType;
      };
      drinks: boolean;
    }
  ];
}
