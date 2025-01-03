"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { AppProgressBar } from "next-nprogress-bar";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { Provider } from "react-redux";
import { store } from "@/store";
import Reloading from "@/components/layout/Reloading";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>
        <React.Suspense fallback={<Reloading />}>
          <AppProgressBar
            shallowRouting
            color="#0e2714"
            height="4px"
            options={{ showSpinner: false }}
          />
          <Provider store={store}>{children}</Provider>
        </React.Suspense>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
