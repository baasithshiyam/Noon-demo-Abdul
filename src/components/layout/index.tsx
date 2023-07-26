import React, { ReactNode } from "react";
import { Montserrat } from "next/font/google";

const primaryFont = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});
interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={primaryFont.className}>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
