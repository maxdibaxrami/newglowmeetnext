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
  React.useEffect(() => {
    const webApp = init(); // Initialize the Telegram WebApp SDK
    
    // Telegram WebApp is now ready
    webApp.ready();

    // Optionally customize the WebApp interface (e.g., setting the app background color)
    webApp.setBackgroundColor('#000000');

    // Handle other initialization tasks
    console.log('Telegram Mini App SDK initialized:', webApp);

    // Example: Log the current user
    if (webApp.initDataUnsafe?.user) {
      console.log('User Info:', webApp.initDataUnsafe.user);
    }

  }, []);

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
    </NextUIProvider>
  );
}
