"use client";

import { GetSelfDataOutput } from "@/api/user/output/get-self-data-output";
import User from "@/entities/user";
import { userStore } from "@/store/user-store";
import { useEffect, useState } from "react";

export default function UserStoreWarmup({ user }: UserStoreWarmupProps) {
  const { setUser } = userStore();

  useEffect(() => {
    if (!user) return;

    console.log(user);

    setUser(
      new User({
        email: user.email,
        id: user.id,
        name: user.contact.name,
        surname: user.contact.surname,
      })
    );
  }, []);

  return <></>;
}

type UserStoreWarmupProps = {
  user?: GetSelfDataOutput;
};
