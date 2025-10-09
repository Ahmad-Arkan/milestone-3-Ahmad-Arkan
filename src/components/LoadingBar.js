"use client";
import "@/app/globals.css";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export default function LoadingBar() {
  return (
    <ProgressBar shallowRouting/>
  );
}