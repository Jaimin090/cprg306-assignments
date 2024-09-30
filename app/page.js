import Image from "next/image";
import MyInfo from "./week-2/student-info"; // Assuming this is a component you want to keep
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 p-6 flex flex-col items-center fade-in">
      <div className="flex-grow flex flex-col items-center">
        <h1 className="text-5xl font-extrabold text-white mb-6 text-center">
          CPRG 306: Web Development 2 - Assignments
        </h1>
        <ul className="bg-slate-800 rounded-lg shadow-lg p-8 space-y-4 w-full max-w-lg">
          {["Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7"].map((week, index) => (
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
      <div className="bg-slate-950 text-gray-400 text-center py-4 w-screen mt-6 rounded-t-lg">
        Developed by <MyInfo /> | All rights reserved © 2024
      </div>
    </main>
  );
}
