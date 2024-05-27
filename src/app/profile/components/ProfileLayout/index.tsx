import Header from "@/components/Header";
import { headers } from "next/headers";
import Link from "next/link";
import { ReactNode } from "react";

export default function ProfileLayout({
  children,
  className,
  ...props
}: {
  children?: ReactNode;
  className?: string;
}) {
  const headerList = headers();
  const pathname = headerList.get("x-pathname");

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
                active={pathname === "/profile/register"}
                to="/profile/register"
              />
              <ListItem
                value="Endereços"
                active={pathname === "/profile/addresses"}
                to="/profile/addresses"
              />
              <ListItem
                value="Pedidos"
                active={pathname === "/profile/orders"}
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
