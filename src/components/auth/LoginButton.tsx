"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import { CiLogin, CiLogout } from "react-icons/ci";
import { DiJava } from "react-icons/di";

export default function LoginButton() {
  const { data: session, status } = useSession();

  if (session) {
    console.log(session);
  } else {
    console.log("No session");
  }

  console.log(session, status);

  return (
    <div>
      {session ? (
        <button
          onClick={async () => await signOut()}
          className="flex items-center"
          title="Sign Out"
        >
          <img
            src={session.user?.image ?? ""} 
            alt="User Image"
            className="w-10 h-10 rounded-full"
          />
        </button>
      ) : (
        <button
          onClick={async () => await signIn()}
          className=" flex"
          title="Sign In"
        >
          <CiLogin className="w-7 h-8" />
        </button>
      )}
    </div>
  );
}