import Image from "next/image";
import EmailTextInput from "./components/EmailTextInput";
import SubscribeButton from "./components/SubscribeButton";

export default function Home() {
  return (
    <main className="">
      <div className="w-full flex">
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
        <h1 className="font-ubuntu text-4xl pt-10 pb-5">Stay uptated!</h1>
        <p className="font-ubuntu">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
      </div>
      <div className="px-6 pt-5">
        <div className="flex mt-3">
          <picture>
            <Image
              src="../assets/images/icon-list.svg"
              width="22"
              height="22"
              alt="icon list"
            />
          </picture>
          <p className="pl-4">Product discovery and build what matters</p>
        </div>
        <div className="flex mt-3">
          <picture>
            <Image
              src="../assets/images/icon-list.svg"
              width="22"
              height="22"
              alt="icon list"
            />
          </picture>
          <p className="pl-4">Meassuring to ensure updates are a success</p>
        </div>
        <div className="flex mt-3">
          <picture>
            <Image
              src="../assets/images/icon-list.svg"
              width="22"
              height="22"
              alt="icon list"
            />
          </picture>
          <p className="pl-4">And much more!</p>
        </div>
      </div>
      <div className="px-6 pt-6">
        <EmailTextInput />
      </div>
      <div className="px-6 pt-6">
        <SubscribeButton />
      </div>
    </main>
  );
}
