import Image from "next/image";
import MyInfo from "./week-2/student-info";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="./week-2/" className="underline text-green-600 hover:text-green-300">Week-2</Link>
    </main>
  );
}
