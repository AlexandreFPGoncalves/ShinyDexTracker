/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { api } from "@/trpc/server";
import React from "react";

export default async function Profile() {
  //const res = await fetch("https://pokeapi.co/api/v2/pokemon/1");

  const data2 = await api.shiny.getAll();

  return <pre>{JSON.stringify(data2, null, 2)}</pre>;
}
