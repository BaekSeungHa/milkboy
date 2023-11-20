"use client";

import React from "react";
import * as S from "./style";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../assets/logo.png";
import useLogin from "@/hooks/Auth/useLogin";

const Login = () => {
  const { idRef, onLogin, pwRef } = useLogin();

  return (
    <S.Container onSubmit={onLogin}>
      <S.Flex>
        <Image src={Logo.src} alt="" width={200} height={200} />
      </S.Flex>
      <S.LoginText>로그인</S.LoginText>
      <S.Column>
        <S.Box>
          <input placeholder="아이디를 입력해주세요" ref={idRef} />
        </S.Box>
        <S.Box>
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            ref={pwRef}
          />
        </S.Box>
      </S.Column>
      <S.SubmitButton>로그인</S.SubmitButton>
      <S.PathToSignup>
        계정이 없다면 <Link href="/join">회원가입 하러 가기</Link>
      </S.PathToSignup>
    </S.Container>
  );
};

export default Login;
