"use client";

import React from 'react';
import { useUserAuth } from "./_utils/auth-context";
import { useRouter } from "next/navigation";

const LandingPage = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  // // Handle GitHub sign-in
  // const handleLogin = async () => {
  //   try {
  //     await gitHubSignIn();
  //   } catch (error) {
  //     console.error("Error signing in:", error);
  //   }
  // };

  // // Handle logout
  // const handleLogout = async () => {
  //   try {
  //     await firebaseSignOut();
  //   } catch (error) {
  //     console.error("Error signing out:", error);
  //   }
  // };

  // Render the landing page content
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {!user ? (
        <div>
          <h1 className="text-4xl font-bold mb-6">Welcome to the Shopping List App</h1>
          <p className="text-lg text-gray-600 mb-4">Please log in to continue.</p>
          <button className="bg-blue-700 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300" onClick={gitHubSignIn}>Log in with GitHub</button>
        </div>
      ) : (
        <div>
          <h1>Welcome to the Shopping List App</h1>
          <p className="text-lg text-gray-600 mb-4">
            Hello, {user.displayName} ({user.email})
          </p>
          <button className="bg-red-700 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition duration-300 mb-4 mr-10" onClick={firebaseSignOut}>Log out</button>
          <button className="bg-green-700 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition duration-300" onClick={() => router.push("/week-10/shopping-list")}>
            Go to Shopping List
          </button>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
