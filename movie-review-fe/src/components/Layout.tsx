import React, { ReactNode } from "react";

type Proptype = {
  children: ReactNode;
};

export default function Layout({ children }: Proptype) {
  return (
    <div>
      {/* header goes here */}
      <main>{children}</main>
    </div>
  );
}
