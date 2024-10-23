"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { init } from 'telegram-web-app';

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();
  const [secondaryBgColor, setSecondaryBgColor] = React.useState('#000'); // default

  React.useEffect(() => {
    if (window?.Telegram?.WebApp) {
      const webApp = init(); // Initialize the Telegram WebApp SDK

      // Make the app ready
      webApp.ready();
  
      // Get theme parameters
      const themeParams = webApp.themeParams;
  
      // Get the secondary background color
      if (themeParams && themeParams.secondary_bg_color) {
        setSecondaryBgColor(themeParams.secondary_bg_color);
      }
  
      console.log('Theme Parameters:', themeParams);
  
    }

  }, []);

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
    </NextUIProvider>
  );
}
