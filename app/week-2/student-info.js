import Link from "next/link";


export default function MyInfo() {
    return (
        <main>
            <h1 className="text-blue-600">Student Information</h1>
            <p>My name is Jaimin Chavda. I am a student at SAIT. I am studying Software Development.</p>
            <Link href="https://github.com/Jaimin090" className="underline text-green-600 hover:text-green-300">My GitHub: Jaimin090</Link>
        </main>
    );
}