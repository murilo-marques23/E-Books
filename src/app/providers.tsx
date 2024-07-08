"use client";

import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { ThemeProvider } from "styled-components";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import theme from "@/style/theme";
import AuthProvider from "@/contexts/AuthContext";
import { QueryClient, QueryClientProvider } from "react-query";
import CardProvider from "@/contexts/CartContext";


export const cache = createCache({ key: "css", prepend: true });

const queryClient = new QueryClient();

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <CacheProvider value={cache}>
      <ChakraProvider>
        <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
          <CardProvider>
          {children}
          </CardProvider>
          </AuthProvider>
          </QueryClientProvider>
        </ThemeProvider>
      </ChakraProvider>
    </CacheProvider>
  );
};

export default Providers;