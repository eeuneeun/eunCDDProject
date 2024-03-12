"use client";
import Image from "next/image";
import { Header } from "@stories/Header";
import { Button } from "@/stories/Button";
import { usePathname, useRouter } from "next/navigation";
function getPizzaData() {
  console.log("get");
}

export default function Home() {
  //HOC 필요성 고민해보기
  const router = useRouter();

  const HeaderProps = {
    // user: { name: "은재" },
    onLogin: () => router.push("./signin"),
    onLogout: () => console.log("logout"),
    onCreateAccount: () => router.push("./signup"),
  };
  return (
    <>
      <Header {...HeaderProps} />
      <main>
        <Image src="/dog.jpg" alt="이미지" width={100} height={100} />
        <Button
          primary={true}
          label="GET PIZZA DATAS"
          onClick={() => getPizzaData()}
        />
      </main>
    </>
  );
}
