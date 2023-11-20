"use client";

import Link from "next/link";
import * as S from "./style";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import useJoin from "@/hooks/Auth/useJoin";

const Join = () => {
  const { joinData, onChangeJoinData, onSubmitJoinData } = useJoin();
  return (
    <S.Container onSubmit={onSubmitJoinData}>
      <S.Flex>
        <Image src={Logo.src} alt="" width={200} height={200} />
      </S.Flex>
      <S.LoginText>회원가입</S.LoginText>
      <S.Column>
        <S.Box>
          <input
            placeholder="이름을 입력해주세요"
            value={joinData.name}
            onChange={onChangeJoinData}
            name="name"
          />
        </S.Box>
        <S.Box>
          <input
            placeholder="아이디를 입력해주세요"
            value={joinData.id}
            onChange={onChangeJoinData}
            name="id"
          />
        </S.Box>
        <S.Box>
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={joinData.pw}
            onChange={onChangeJoinData}
            name="pw"
          />
        </S.Box>
        <S.Box>
          <input
            placeholder="정보를 입력해주세요"
            value={joinData.info}
            onChange={onChangeJoinData}
            name="info"
          />
        </S.Box>
      </S.Column>
      <S.SubmitButton>회원가입</S.SubmitButton>
      <S.PathToSignup>
        계정이 있다면 <Link href="/">로그인 하러 가기</Link>
      </S.PathToSignup>
    </S.Container>
  );
};

export default Join;
