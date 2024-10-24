"use client";

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
          accentTextColor: "#6ab2f2",
          bgColor: "#000000",
          buttonColor: "#5288c1",
          buttonTextColor: "#ffffff",
          destructiveTextColor: "#ec3942",
          headerBgColor: "#fcb69f",
          hintColor: "#708499",
          linkColor: "#6ab3f3",
          secondaryBgColor: "#000000",
          sectionBgColor: "#000000",
          sectionHeaderTextColor: "#FFFFFF",
          subtitleTextColor: "#FFFFFF",
          textColor: "#FFFFFF",
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

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
    </NextUIProvider>
  );
}
