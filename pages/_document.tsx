import { Html, Head, Main, NextScript } from "next/document";
import CardHoverEffectDemo from "./about";

import React from "react";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main/>
        <NextScript />
      </body>
      <div>
      <CardHoverEffectDemo/>
      </div>
    </Html>
  )
}

