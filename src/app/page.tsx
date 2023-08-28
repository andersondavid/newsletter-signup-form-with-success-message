import Image from "next/image";
import EmailTextInput from "./components/EmailTextInput";
import SubscribeButton from "./components/SubscribeButton";

export default function Home() {
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
            src="/assets/images/illustration-sign-up-mobile.svg"
          />
        </div>
        <div className="px-6">
          <h1 className="font-ubuntuBold text-4xl pt-10 pb-5 md:text-6xl text-darkslategrey">Stay uptated!</h1>
          <p className="font-ubuntu font-normal text-darkslategrey">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
        </div>
        <div className="px-6 pt-5">

          <div className="flex mt-3 md:mt-3">
            <picture>
              <Image
                src="../assets/images/icon-list.svg"
                width="22"
                height="22"
                alt="icon list"
              />
            </picture>
            <p className="pl-4 text-sm font-ubuntu font-light text-darkslategrey">Product discovery and build what matters</p>
          </div>

          <div className="flex mt-3 md:mt-3">
            <picture>
              <Image
                src="../assets/images/icon-list.svg"
                width="22"
                height="22"
                alt="icon list"
              />
            </picture>
            <p className="pl-4 text-sm font-ubuntu font-light text-darkslategrey">Meassuring to ensure updates are a success</p>
          </div>

          <div className="flex mt-3 md:mt-3">
            <picture>
              <Image
                src="../assets/images/icon-list.svg"
                width="22"
                height="22"
                alt="icon list"
              />
            </picture>
            <p className="pl-4 text-sm font-ubuntu font-light text-darkslategrey">And much more!</p>
          </div>

        </div>
        <div className="px-6 pt-6 md:pt-8">
          <EmailTextInput />
        </div>
        <div className="p-6">
          <SubscribeButton />
        </div>
      </div>
      <div className="w-full max-w-sm md:block hidden m-6">
        <Image
          alt=""
          width={100}
          height={100}
          style={{ height: "auto", width: "100%" }}
          fill={false}
          src="/assets/images/illustration-sign-up-desktop.svg"
        />
      </div>
    </main>
  );
}
