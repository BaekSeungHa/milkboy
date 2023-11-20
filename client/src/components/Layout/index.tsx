"use client";

import React, { ReactNode } from "react";
import * as S from "./style";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return <S.Container>{children}</S.Container>;
};

export default Layout;
