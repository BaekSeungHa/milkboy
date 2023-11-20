import MilkRepositoryImpl from "@/repository/MilkRepository/MilkRepositoryImpl";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetDrankMilkListQuery = (date: string) =>
  useQuery(
    ["milk/drankMilkList", date],
    () => MilkRepositoryImpl.getDrankList(date),
    {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 5,
    }
  );

export const useChangeDrankStatusMutation = () => {
  const mutation = useMutation(MilkRepositoryImpl.checkDrankMilk);
  return mutation;
};
