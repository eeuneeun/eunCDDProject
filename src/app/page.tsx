"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@/stories/Button";

function getPizzaData() {
  console.log("get");
}

export default function Home() {
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
