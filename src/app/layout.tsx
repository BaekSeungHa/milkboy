import Layout from "@/components/Layout";
import Provider from "@/components/Provider";
import StyledComponentsRegistry from "@/libs/styles/registry";
import GlobalStyles from "@/styles/globalStyles";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "2하년 1반 우유 | 밀크남",
  description: "2학년 1반 우유 관리 시스템.",
};

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
          <Provider>
            <GlobalStyles />
            <Layout>{children}</Layout>
          </Provider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
