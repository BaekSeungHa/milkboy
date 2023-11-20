"use client";
import Link from "next/link";
import * as S from "./style";
import Image from "next/image";
import Logo from "@/assets/logo.png";

const Join = () => {
  return (
    <S.Container>
      <S.Flex>
        <Image src={Logo.src} alt="" width={200} height={200} />
      </S.Flex>
      <S.LoginText>회원가입</S.LoginText>
      <S.Column>
        <S.Box>
          <input placeholder="이름을 입력해주세요" />
        </S.Box>
        <S.Box>
          <input placeholder="아이디를 입력해주세요" />
        </S.Box>
        <S.Box>
          <input type="password" placeholder="비밀번호를 입력해주세요" />
        </S.Box>
        <S.Box>
          <input type="password" placeholder="정보를 입력해주세요" />
        </S.Box>
      </S.Column>
      <S.PathToSignup>
        계정이 있다면 <Link href="/login">로그인 하러 가기</Link>
      </S.PathToSignup>
    </S.Container>
  );
};

export default Join;
