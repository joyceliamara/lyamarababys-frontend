import { GetSelfDataOutput } from "@/api/user/output/get-self-data-output";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import User from "@/entities/user";
import { UserApi } from "@/api/user/user.api";
import UserStoreWarmup from "@/components/UserStoreWarmup";
import { ZodCatch } from "zod";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lyamara Baby's",
  description: "Artigos de Babys",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let user: GetSelfDataOutput | undefined;

  try {
    const { data } = await UserApi.getSelfData();

    user = data;
  } catch {}

  return (
    <html lang="pt-br">
      <body className={montserrat.className}>{children}</body>
      <UserStoreWarmup user={user} />
    </html>
  );
}
