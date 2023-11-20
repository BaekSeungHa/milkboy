"use client";

import UserRepositoryImpl from "@/repository/UserRepository/UserRepositoryImpl";
import { useMutation } from "@tanstack/react-query";

export const useUserLoginMutation = () => {
  const mutation = useMutation(UserRepositoryImpl.userLogin);
  return mutation;
};

export const useUserJoinMutation = () => {
  const mutation = useMutation(UserRepositoryImpl.userJogin);
  return mutation;
};
