"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();
  const params = useParams();
  console.log(params);
  return (
    <header>
      <h1>
        <Link href="/">
          {" "}
          <h1>Home</h1>
        </Link>
      </h1>
      <div>
        <button
          onClick={() => {
            router.push("/new");
          }}
        >
          Add task
        </button>
      </div>
    </header>
  );
};

export default Navbar;
