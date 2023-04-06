import React, { ReactNode } from "react";
import Header from "./Header";

type Proptype = {
  children: ReactNode;
};

export default function Layout({ children }: Proptype) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
}
