"use client";

import { useSession } from "@/app/lib/auth-client";

const Profile = () => {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <p className="text-gray-500">Loading profile...</p>
      </div>
    );
  }

  const user = session?.user;

  return (
    <section className="bg-gray-50 py-10">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-sm">
        <div className="flex items-center gap-6">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-600 text-3xl font-bold text-white">
            {user?.name?.charAt(0).toUpperCase() || "U"}
          </div>

          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {user?.name || "User"}
            </h1>

            <p className="mt-1 text-gray-600">
              {user?.email || "No email available"}
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-5">
            <h3 className="text-sm font-semibold text-gray-500">Full Name</h3>
            <p className="mt-2 text-lg">{user?.name || "-"}</p>
          </div>

          <div className="rounded-xl border p-5">
            <h3 className="text-sm font-semibold text-gray-500">
              Email Address
            </h3>
            <p className="mt-2 text-lg">{user?.email || "-"}</p>
          </div>

          <div className="rounded-xl border p-5">
            <h3 className="text-sm font-semibold text-gray-500">User ID</h3>
            <p className="mt-2 break-all text-lg">{user?.id || "-"}</p>
          </div>

          <div className="rounded-xl border p-5">
            <h3 className="text-sm font-semibold text-gray-500">User Role</h3>
            <p className="mt-2 text-lg font-medium capitalize">
              {user?.role || "Staff"}
            </p>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Profile;
