"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

export default function Login() {
  return (
    <div className="bg-[#11A37F] flex flex-col h-screen items-center justify-center text-center space-y-10">
      <Image
        src="https://static.cdnlogo.com/logos/c/18/ChatGPT_800x800.png"
        width={100}
        height={100}
        alt="logo"
      />
      <button
        onClick={() => signIn("google")}
        className="text-white font-bold text-3xl animate-pulse"
      >
        Sign In to use ChatGPT
      </button>
    </div>
  );
}
