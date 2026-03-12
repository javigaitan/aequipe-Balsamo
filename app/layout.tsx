import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Aequipe - Repuestos Renault | Más de 25 años de experiencia",
  description:
    "Especialistas en repuestos adaptables para vehículos Renault. Más de 25 años de experiencia, +600 distribuidores y +8000 referencias en toda Argentina.",
  generator: "Gaitan Javier Emanuel",
  keywords: ["Aequipe", "repuestos Renault", "autopartes", "Argentina", "repuestos adaptables"],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
  <html lang="es" className="scroll-smooth">
    <head>
      {/* Fuente actual */}
      <link
        href="https://db.onlinewebfonts.com/c/a44ba55f82bbe3403e7b7661489068a8?family=Allotrope+W05+Compressed+XBold"
        rel="stylesheet"
        type="text/css"
      />

      {/* Adobe Typekit */}
      <link rel="stylesheet" href="https://use.typekit.net/kof1bhb.css" />
    </head>

    <body className="font-allotrope antialiased">
      {children}
      <Analytics />
    </body>
  </html>
)

}
