import React from "react";
export * from "./Card";
export * from "./Button";
import OpeningMenu from "./OpeningMenu";

export { OpeningMenu };

declare global {
  interface Window {
    MyLibReact: typeof React;
  }
}

window.MyLibReact = React;
