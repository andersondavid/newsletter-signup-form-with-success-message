"use client"

import Image from "next/image";
import React from "react";
import BigButton from "../components/BigButton";
import { useSearchParams } from "next/navigation";

export default function Success() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  return (
    <div className="px-6 h-screen md:h-min flex flex-col md:px-12 md:max-w-[29em]">
      <div className="mt-24 md:mt-8">
        <Image
          alt=""
          width={64}
          height={64}
          fill={false}
          src="/assets/images/icon-success.svg"
        />
      </div>
      <div className="mt-10">
        <h1 className="text-4xl md:text-5xl font-ubuntuBold text-darkslategrey">
          Thanks for subscribing!
        </h1>
        <p className="font-ubuntu text-darkslategrey mt-6">
          A confirmation email has been sent to{" "}
          <span className="font-ubuntuBold">{email}</span>.
          Please open it and click the button inside to confirm your
          subscription
        </p>
      </div>
      <div className="mt-auto mb-4 md:mt-8 md:mb-12">
        <BigButton text="Dismiss message" />
      </div>
    </div>
  );
}
