"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="p-4 bg-gray-100 flex gap-4">
      <Link href="/">Home</Link>
      {session?.user?.role === "ADMIN" && <a href="/admin">Admin Dashboard</a>}
      <Link href="/profile">Profile</Link>
    </nav>
  );
}
