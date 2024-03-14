"use client";
import Image from "next/image";
import { Button } from "@/stories/Button";
import { usePathname, useRouter } from "next/navigation";
function getPizzaData() {
  console.log("get");
}

export default function Home() {
  //HOC 필요성 고민해보기

  return (
    <>
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
