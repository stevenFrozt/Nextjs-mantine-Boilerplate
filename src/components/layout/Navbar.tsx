"use client";

import { Avatar, Group, Menu } from "@mantine/core";
import Link from "next/link";
// import { useDisclosure } from "@mantine/hooks";
import { IoIosCall } from "react-icons/io";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  NAV_LINKS,
  AVATAR_DROPDOWN_OPTIONS,
  CONTACT_NUMBER,
} from "@/lib/constants";
import { MenuDropdown } from "@/lib/types";
type props = {
  children?: React.ReactNode;
};

export default function Navbar({}: props) {
  const pathname = usePathname();
  // const [opened, { toggle }] = useDisclosure(false);

  return (
    <div className="flex items-center justify-between h-full w-full py-4">
      <div className="text-3xl font-[600] text-primary">Logo</div>
      <Group gap={30}>
        {NAV_LINKS.map((i) => (
          <Link
            href={i.link}
            key={i.link}
            className={clsx(
              "text-md hover:-translate-y-1 transition-all duration-200",
              pathname === i.link
                ? "text-primary font-[600]"
                : "text-slate-400 font-[500] hover:text-slate-600",
            )}
          >
            {i.label}
          </Link>
        ))}
        <ContactNumberBadge />
        <Menu shadow="md" width={200}>
          <Menu.Target>
            <Avatar color="green" radius="xl" className="cursor-pointer">
              MK
            </Avatar>
          </Menu.Target>
          <MenuOptions options={AVATAR_DROPDOWN_OPTIONS} />
        </Menu>
      </Group>
    </div>
  );
}

function MenuOptions({ options }: { options: MenuDropdown[] }) {
  return (
    <>
      <Menu.Dropdown>
        {options.map((i, index) => (
          <div key={index}>
            <Menu.Label>{i.group_label}</Menu.Label>
            {i.items.map((j, _index) => (
              <Menu.Item key={_index} onClick={j.onclick}>
                {j.label}
              </Menu.Item>
            ))}
          </div>
        ))}
      </Menu.Dropdown>
    </>
  );
}

function ContactNumberBadge() {
  return (
    <div className="bg-primary py-3 px-4 text-white rounded-md text-sm">
      <Group gap={4}>
        <IoIosCall className="text-xl" />
        {CONTACT_NUMBER}
      </Group>
    </div>
  );
}
