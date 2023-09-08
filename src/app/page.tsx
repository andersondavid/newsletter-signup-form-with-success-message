"use client";

import { useState, useEffect } from "react";
import { z, ZodIssue } from "zod";
import { useRouter } from "next/navigation";
import Image from "next/image";

import EmailTextInput from "./components/EmailTextInput";
import BigButton from "./components/BigButton";

export default function Home() {
  const [email, setEmail] = useState("");
  const [inputError, setInputError] = useState<ZodIssue | null>();
  const emailValidator = z.string().email();
  const router = useRouter();

  useEffect(() => {
    const validation = emailValidator.safeParse(email);
    if (validation.success || email == "") {
      setInputError(null);
    } else {
      setInputError(validation.error?.issues[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email]);

  const subscribing = () => {
    if (inputError == null && email != "") {
      router.push("/success?email=" + email);
    } else {
      alert("Valid email required")
    }
  };

  return (
    <main className="md:flex">
      <div className="md:p-6 md:max-w-[29em]">
        <div className="w-full flex md:hidden">
          <Image
            alt=""
            width={100}
            height={100}
            style={{ height: "auto", width: "100%" }}
            fill={false}
            src="https://raw.githubusercontent.com/andersondavid/newsletter-signup-form-with-success-message/master/public/assets/images/illustration-sign-up-mobile.svg"
          />
        </div>
        <div className="px-6">
          <h1 className="font-ubuntuBold text-4xl pt-10 pb-5 md:text-6xl text-darkslategrey">
            Stay uptated!
          </h1>
          <p className="font-ubuntu font-normal text-darkslategrey">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
        </div>
        <div className="px-6 pt-5">
          <div className="flex mt-3 md:mt-3">
            <picture>
              <Image
                src="https://raw.githubusercontent.com/andersondavid/newsletter-signup-form-with-success-message/master/public/assets/images/icon-list.svg"
                width="22"
                height="22"
                alt="icon list"
              />
            </picture>
            <p className="pl-4 text-sm font-ubuntu font-light text-darkslategrey">
              Product discovery and build what matters
            </p>
          </div>

          <div className="flex mt-3 md:mt-3">
            <picture>
              <Image
                src="https://raw.githubusercontent.com/andersondavid/newsletter-signup-form-with-success-message/master/public/assets/images/icon-list.svg"
                width="22"
                height="22"
                alt="icon list"
              />
            </picture>
            <p className="pl-4 text-sm font-ubuntu font-light text-darkslategrey">
              Meassuring to ensure updates are a success
            </p>
          </div>

          <div className="flex mt-3 md:mt-3">
            <picture>
              <Image
                src="https://raw.githubusercontent.com/andersondavid/newsletter-signup-form-with-success-message/master/public/assets/images/icon-list.svg"
                width="22"
                height="22"
                alt="icon list"
              />
            </picture>
            <p className="pl-4 text-sm font-ubuntu font-light text-darkslategrey">
              And much more!
            </p>
          </div>
        </div>
        <div className="px-6 pt-6 md:pt-8">
          <EmailTextInput
            email={email}
            setEmail={setEmail}
            issue={inputError}
          />
        </div>
        <div className="p-6">
          <BigButton
            text="Subscribe to monthly newsletter"
            onClick={subscribing}
            active={inputError == null && email != ""}
          />
        </div>
      </div>
      <div className="w-full max-w-sm md:block hidden m-6">
        <Image
          alt=""
          width={100}
          height={100}
          style={{ height: "auto", width: "100%" }}
          fill={false}
          src="https://raw.githubusercontent.com/andersondavid/newsletter-signup-form-with-success-message/master/public/assets/images/illustration-sign-up-desktop.svg"
        />
      </div>
    </main>
  );
}
