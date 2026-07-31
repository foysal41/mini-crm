"use client";

import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { authClient } from "../lib/auth-client";


export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut();

    router.push("/login");
    router.refresh();
  };

  return (
    <Button
      onPress={handleLogout}
      className="w-full justify-start"
    
    >
      Logout
    </Button>
  );
}