import Script from "next/script";

export const metadata = {
  title: "Manus+Ameri",
  description: "Your non-partisan civic tracker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script id="tailwind-config" strategy="beforeInteractive">
          {`
            tailwind = {
              theme: {
                extend: {
                  colors: {
                    civicBlue: "#0f2f5f",
                    civicGold: "#b58b00",
                  }
                }
              }
            };
          `}
        </Script>
        <Script
          id="tailwind-cdn"
          src="https://cdn.tailwindcss.com?plugins=forms,typography"
          strategy="beforeInteractive"
        />
      </head>
      <body className="bg-slate-100 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
