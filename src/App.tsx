import React from "react";
import { Theme, presetGpnDefault } from "@consta/uikit/Theme";
import AppRouter from "./components/AppRouter/AppRouter";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <div>
      <Theme preset={presetGpnDefault}>
        <Navbar />
        <AppRouter />
      </Theme>
    </div>
  );
}
