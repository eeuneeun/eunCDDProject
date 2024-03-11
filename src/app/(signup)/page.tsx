"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@stories/Button";

export default function Home() {
  return (
    <>
      <main>
        <Image src={"@public/next.svg"} alt="이미지" />
        <Button primary={true} label="GET PIZZA DATAS" />
      </main>
    </>
  );
}
