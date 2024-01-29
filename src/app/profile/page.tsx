"use client";

import Header from "@/components/Header";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useLayoutEffect, useState } from "react";

export default function MyAccount() {
  const router = useRouter();

  useLayoutEffect(() => {
    router.replace("/profile/register");
  });

  return <></>;
}

export function ProfileLayout({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  const pathname = usePathname();
  const [active, setActive] = useState<ItemType | undefined>();

  useLayoutEffect(() => {
    switch (pathname) {
      case "/profile/register":
        setActive("REGISTER_DATA");
        break;
      case "/profile/addresses":
        setActive("ADDRESS");
        break;
      case "/profile/orders":
        setActive("ORDERS");
        break;
    }
  }, [pathname]);

  return (
    <>
      <Header />
      <div className="flex flex-row max-w-5xl w-full mx-auto">
        <div>
          <aside className="sticky top-0 p-8">
            <span className="text-3xl font-bold">Perfil</span>
            <ul className="mt-8 flex flex-col gap-2">
              <ListItem
                value="Dados cadastrais"
                active={active === "REGISTER_DATA"}
                to="/profile/register"
              />
              <ListItem
                value="Endereços"
                active={active === "ADDRESS"}
                to="/profile/addresses"
              />
              <ListItem
                value="Pedidos"
                active={active === "ORDERS"}
                to="/profile/orders"
              />
            </ul>
          </aside>
        </div>
        <main className={`my-8 px-14 flex-1 ${className}`}>{children}</main>
      </div>
    </>
  );
}

function ListItem(props: ListItemProps) {
  return (
    <Link
      href={props.to}
      className="rounded-md"
      style={{
        background: props.active ? "white" : "transparent",
      }}
    >
      <li className="p-2 rounded-md cursor-pointer hover:bg-white">
        {props.value}
      </li>
    </Link>
  );
}

interface ListItemProps {
  active?: boolean;
  value: string;
  to: string;
}

type ItemType = "REGISTER_DATA" | "ADDRESS" | "ORDERS";
