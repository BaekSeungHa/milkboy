import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import React, { useState } from "react";
import { ReactNode } from "react";

export interface ProvidersProps {
  children: ReactNode;
  pageProps: any;
}

const Provider = ({ children, pageProps }: ProvidersProps) => {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
        queries: {
            
        }
    }
  }));
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}></Hydrate>
    </QueryClientProvider>
  );
};

export default Provider;
