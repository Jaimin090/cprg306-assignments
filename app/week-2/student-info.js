import Link from "next/link";


export default function MyInfo() {
    return (
        <main>
            <h1 className="text-blue-600">Jaimin Chavda</h1>
            <p> I am a student at SAIT. I am studying Software Development.</p>
            <Link href="https://github.com/Jaimin090" className=" text-green-600 hover:text-green-300 hover:underline">My GitHub: Jaimin090</Link>
        </main>
    );
}