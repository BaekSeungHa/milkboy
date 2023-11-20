import { useRouter } from "next/navigation";
import { FormEvent, useRef } from "react";
import { useUserLoginMutation } from "@/query/user/query";

const useLogin = () => {
  const router = useRouter();

  const idRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);

  const userLoginMutation = useUserLoginMutation();

  const onLogin = (e: FormEvent) => {
    e.preventDefault();
    if (idRef.current && pwRef.current) {
      userLoginMutation.mutate(
        {
          id: idRef.current.value,
          pw: pwRef.current.value,
        },
        {
          onSuccess: () => {
            console.log("fh");

            window.alert("로그인 성공");
            router.push("/list");
          },
          onError: () => {
            window.alert("로그인 실패");
          },
        }
      );
    }
  };

  return { idRef, pwRef, onLogin };
};

export default useLogin;
