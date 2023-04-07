import React, { ReactNode } from "react";
import Header from "./Header";

type Proptype = {
  children: ReactNode;
};

export default function Layout({ children }: Proptype) {
  return (
    <div className="bg-white">
      <Header />
      <main>{children}</main>
    </div>
  );
}
