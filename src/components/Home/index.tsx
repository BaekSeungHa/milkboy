"use client";

import React, { ChangeEvent } from "react";
import * as S from "./style";
import Image from "next/image";
import Logo from "@/assets/logo.png";

const Home = () => {
  return (
    <S.LoginBox>
      <Image src={Logo.src} alt="" width={200} height={200} />
      <S.Text>도담도담 계정으로 로그인</S.Text>
    </S.LoginBox>
  );
};

export default Home;
