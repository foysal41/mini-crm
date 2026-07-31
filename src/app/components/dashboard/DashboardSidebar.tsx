import React, { ComponentType, SVGProps } from "react";
import {LayoutSideContentLeft, Persons, ListCheck, Person , ArrowRightFromSquare, House, PersonMagnifier} from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";

const DashboardSidebar = () => {
  const navItems: {
    icon: ComponentType<SVGProps<SVGSVGElement>>;
    label: string;
  }[] = [
    { icon: House, label: "Dashboard" },
    { icon: Persons, label: "Customers" },
    { icon: ListCheck, label: "Tasks" },
    { icon: PersonMagnifier, label: "Users" },
    { icon: Person, label: "Profile" },
    { icon: ArrowRightFromSquare, label: "Logout" },
  ];

  const navContent = (
    <nav className="flex flex-col gap-1">
      {navItems.map((item) => (
        <button
          key={item.label}
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
          type="button"
        >
          
          <item.icon className="size-5 text-muted" />
          {item.label}
        </button>
      ))}
    </nav>
  );

  return (
    <>
    <aside className="hidden w-64 shrink-0 border-r border-default p-4 lg:block">
        {navContent}
    </aside>
      <Drawer>
        <Button className="lg:hidden" variant="secondary">
          <LayoutSideContentLeft />
          Sidebar
        </Button>
        <Drawer.Backdrop>
          <Drawer.Content placement="left">
            <Drawer.Dialog>
              <Drawer.CloseTrigger />
              <Drawer.Header>
                <Drawer.Heading>Navigation</Drawer.Heading>
              </Drawer.Header>
              <Drawer.Body>

                {navContent}
              </Drawer.Body>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>
    </>
  );
};

export default DashboardSidebar;
