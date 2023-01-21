// import Head from "next/head";
// import Image from "next/image";
import { Inter } from "@next/font/google";
import ColorPicker from "../components/ColorPicker";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ColorPicker />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}
