import { useUserJoinMutation } from "@/query/user/query";
import { JoinParam } from "@/repository/UserRepository/UserRepository";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

const useJoin = () => {
  const router = useRouter();
  const userJoinMutation = useUserJoinMutation();

  const [joinData, setJoinData] = useState<JoinParam>({
    id: "",
    info: "",
    name: "",
    pw: "",
  });

  const onChangeJoinData = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setJoinData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitJoinData = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    userJoinMutation.mutate(joinData, {
      onSuccess: () => {
        window.alert("회원가입 성공");
        router.replace("/");
      },
      onError: () => {
        window.alert("회원가입 실패");
      },
    });
  };
  return {
    joinData,
    onChangeJoinData,
    onSubmitJoinData,
  };
};

export default useJoin;
