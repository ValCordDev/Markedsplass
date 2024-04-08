import Image from "next/image";
import Link from "next/link";
import Login from "./Login";
import Navicon from "./Navicon";

export default function Home() {
  return (
    <main>
      <Navicon />

      <div className="flex justify-center items-center h-screen w-screen">
        <div className="grid md:grid-cols-2 w-screen h-screen">
          <Login />
          <div className="flex text-2xl font-bold justify-center items-center overflow-hidden bg-blue-50">
            <h1 className="text-2xl text-black">markedsplass.no</h1>
          </div>
        </div>
      </div>
    
    </main>
  );
}