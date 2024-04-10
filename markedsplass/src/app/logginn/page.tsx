import Image from "next/image";
import Link from "next/link";
import Login from "./Login";
import Navicon from "../Navicon";

export default function Home() {
  return (
    <main>
      <Navicon />

      <div className="flex justify-center items-center h-screen w-screen">
        <div className="grid lg:grid-cols-2 w-screen h-screen">
          <Login />
          <div className="flex text-2xl font-bold justify-center items-center overflow-hidden bg-slate-200">
            <Image src={'https://i.ibb.co/rfJD3Sw/arerajfja.png'} alt="Sale" width={200} height={200} className=" shadow-2xl rounded-full flex justify-center items-center"></Image>
          </div>
        </div>
      </div>
    
    </main>
  );
}