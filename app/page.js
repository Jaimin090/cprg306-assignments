import MyInfo from "./week-2/student-info";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-slate-800 to-slate-950 flex flex-col justify-between items-center">
      <div className="flex-grow flex flex-col items-center  p mb-20">
        {/* Main Heading */}
        <h1 className="text-5xl font-extrabold text-white my-8 text-center">
          CPRG 306: Web Development 2 - Assignments
        </h1>

        {/* Main Content - Week Links */}
        <ul className="bg-slate-800 rounded-lg shadow-lg p-8 space-y-4 w-full max-w-lg">
          {["Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8", "Week 9"].map((week, index) => (
            <li key={index} className="hover:shadow-xl transition-shadow duration-200">
              <Link
                href={`./week-${index + 2}/`}
                className="block text-lg font-medium text-green-500 hover:text-green-400 hover:underline transform transition duration-200 hover:scale-105 p-4 bg-slate-700 rounded-lg shadow-md"
              >
                {week}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <div className=" w-full"><MyInfo/></div>
    </main>
  );
}
