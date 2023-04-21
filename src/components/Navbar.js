"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useTasks } from "@/context/TaskContext";

const Navbar = () => {
  const router = useRouter();
  const params = useParams();
  const { tasks } = useTasks();
  console.log(params);
  return (
    <header className="flex items-center justify-between bg-gray-800 px-28 py-3">
      <Link href="/">
        {" "}
        <h1 className="font-bold text-3xl text-white">
          Home{" "}
          <span className="text-sm ml-3 text-slate-300">{tasks.length}</span>
        </h1>
      </Link>

      <div>
        <button
          className="bg-green-500 hover:bg-green-400 px-5 py-2 text-gray-50 font-bold rounded-sm inline-flex items-center"
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
