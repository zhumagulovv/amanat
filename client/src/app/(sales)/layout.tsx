import React from "react";

export default function HomePageLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
