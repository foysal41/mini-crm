"use client";

import { useState } from "react";
import { Link, Button } from "@heroui/react";
import { Bars, Xmark } from "@gravity-ui/icons";
import { authClient, useSession } from "../lib/auth-client";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const { data: session, isPending } = useSession();
  const user = session?.user;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  if (!isPending && session?.user) {
    navItems.splice(1, 0, {
      name: "Dashboard",
      href: "/dashboard",
    });
  }

  const handleLogout = async () => {
    await authClient.signOut();

    router.push("/auth/signin");
    router.refresh();
  };
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-default-200 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-foreground no-underline"
        >
          Mini CRM
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-foreground transition hover:text-primary"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <div className="hidden items-center gap-4 md:flex">
          {user ? (
            <>
              <span>Hi, {user.name}</span>

              <Button onPress={handleLogout} style={{ backgroundColor: "red" }}>
                Logout
              </Button>
            </>
          ) : (
            <Link href="/auth/signup">
              <Button>Get Started</Button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <Xmark className="h-6 w-6" />
          ) : (
            <Bars className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-default-200 bg-background md:hidden">
          <ul className="flex flex-col gap-4 p-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="block text-foreground"
                  onPress={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}

            <div className="flex flex-col gap-4 md:flex">
              {user ? (
                <>
                  <span>Hi, {user.name}</span>

                  <Button
                    onPress={handleLogout}
                    style={{ backgroundColor: "red" }}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <Link href="/auth/signup">
                  <Button>Get Started</Button>
                </Link>
              )}
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
