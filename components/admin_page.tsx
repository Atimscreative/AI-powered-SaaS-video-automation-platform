import { auth } from "@/lib/auth"; // wrapper around getServerSession

export default async function AdminPage() {
  const session = await auth();

  if (session?.user?.role !== "ADMIN") {
    return <p className="text-red-600">Not authorized</p>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <p>Welcome {session.user?.name}</p>
    </div>
  );
}
