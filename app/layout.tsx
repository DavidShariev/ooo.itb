import Header from "@/components/Header";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />

      <body className="dark:bg-black">
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
import Footer from "@/components/Footer";
