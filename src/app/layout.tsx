import "@ln-foot/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "@ln-foot/trpc/react";

export const metadata: Metadata = {
  title: "Ln Foot",
  description: "OBTENER LES DERNIERES EXCLUSIVITE EN MATIERE DE FOOT!",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html data-theme="light" lang="fr" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
