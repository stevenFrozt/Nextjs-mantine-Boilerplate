"use client";

import { Avatar, Group, Menu } from "@mantine/core";
import Link from "next/link";
// import { useDisclosure } from "@mantine/hooks";
// import { IconChevronDown } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
type props = {
  children?: React.ReactNode;
};
export default function Navbar({}: props) {
  const pathname = usePathname();
  // const [opened, { toggle }] = useDisclosure(false);
  const links = [
    { link: "/", label: "Home" },
    { link: "/cars", label: "Cars" },
    { link: "/about", label: "About Us" },
    { link: "/contact", label: "Contact Us" },
  ];

  return (
    <>
      <div className="text-3xl font-[600] text-primary">Logo</div>
      <Group gap={30}>
        {links.map((i) => (
          <Link
            href={i.link}
            key={i.link}
            className={clsx(
              "text-md",
              pathname === i.link
                ? "text-primary font-[600]"
                : "text-slate-400 font-[500]",
            )}
          >
            {i.label}
          </Link>
        ))}
        <Menu shadow="md" width={200}>
          <Menu.Target>
            <Avatar color="green" radius="xl" className="cursor-pointer">
              MK
            </Avatar>
          </Menu.Target>
          <MenuOptions />
        </Menu>
      </Group>
    </>
  );
}

function MenuOptions() {
  return (
    <>
      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>
        <Menu.Item>Settings</Menu.Item>
        <Menu.Item>Messages</Menu.Item>
        <Menu.Item>Gallery</Menu.Item>
      </Menu.Dropdown>
    </>
  );
}
