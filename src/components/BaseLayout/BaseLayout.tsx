import React from "react";

export function BaseLayout({ children }) {
  return (
    <div>
      <header>header</header>
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  );
};
