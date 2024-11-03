"use client";

import { Suspense } from 'react'

import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import {
  initMiniApp,
  mockTelegramEnv,
  parseInitData,
} from "@telegram-apps/sdk";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  const initializeTelegramSDK = async () => {
    try {
      const [miniApp] = initMiniApp();

      miniApp.setHeaderColor("#000000");
      await miniApp.ready();
      miniApp.setHeaderColor("#000000");
    } catch (error) {
      const initDataRaw = new URLSearchParams([
        [
          "user",
          JSON.stringify({
            id: 99281932,
            first_name: "Andrew",
            last_name: "Rogue",
            username: "rogue",
            language_code: "en",
            is_premium: true,
            allows_write_to_pm: true,
          }),
        ],
        [
          "hash",
          "89d6079ad6762351f38c6dbbc41bb53048019256a9443988af7a48bcad16ba31",
        ],
        ["auth_date", "1716922846"],
        ["start_param", "debug"],
        ["chat_type", "sender"],
        ["chat_instance", "8428209589180549439"],
      ]).toString();

      mockTelegramEnv({
        themeParams: {
          accentTextColor: "#000",
          bgColor: "#000",
          buttonColor: "#000",
          buttonTextColor: "#000",
          destructiveTextColor: "#000",
          headerBgColor: "#000",
          hintColor: "#000",
          linkColor: "#000",
          secondaryBgColor: "#000000",
          sectionBgColor: "#000000",
          sectionHeaderTextColor: "#000",
          subtitleTextColor: "#000",
          textColor: "#000",
        },
        initData: parseInitData(initDataRaw),
        initDataRaw,
        version: "7.2",
        platform: "tdesktop",
      });

      console.log("Mock Telegram environment initialized");
    }
  };

  // Инициализация SDK
  initializeTelegramSDK();
  
  function SearchBarFallback() {
    return <>placeholder</>
  }
   
  return (
    <NextUIProvider navigate={router.push}>
      <Suspense fallback={<SearchBarFallback />}>
        <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
      </Suspense>
    </NextUIProvider>
  );
}
