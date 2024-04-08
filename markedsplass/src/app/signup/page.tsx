import Image from 'next/image';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import Navicon from '../Navicon';
import Signup from './Signup';

export default function Changeme() {
  return (
    <main>
        <Navicon />

        <div className="flex justify-center items-center h-screen w-screen">
            <div className="grid grid-cols-2 w-screen">
                <Signup />
                <div className="flex text-2xl font-bold justify-center items-center">
                <Image src={"https://www.iris-salten.no/getfile.php/1345570-1694073381/Bilder%20IRIS%20Salten/Artikkelbilder/HUSHOLDNING/Bruktmarkedkit/Jente%20p%C3%A5%20bruktmarked.jpg%20%28content_full_width%29.jpg"} alt="Bruktvaremarked" width={1000} height={1000}></Image>
                </div>
            </div>
        </div>
    </main>
  );
}