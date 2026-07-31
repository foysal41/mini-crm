"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Spinner } from "@heroui/react";
import { useSession } from "@/app/lib/auth-client";

const Dashboard = () => {
  const { data: session, isPending } = useSession();
  const user = session?.user;
 
  console.log(user)

  const router = useRouter();

  useEffect(() => {
    if (isPending) return;

    const role = session?.user?.role;
    console.log(role)

    if (role === "admin") {
      router.replace("/dashboard");
    } else if (role === "Staff" || role === "customer") {
      router.replace("/dashboard");
    }
  }, [session, isPending, router]);



  
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Spinner size="lg" />
    </div>
  );
};

export default Dashboard;