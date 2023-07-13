/* eslint-disable @next/next/no-img-element */
import { Navbar } from "@/components";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>ShinyDexTracker</title>
        <meta
          name="description"
          content="A revolutionary app designed specifically for shiny hunters"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 shadow-inset">
        <div className="container flex flex-col items-center justify-center gap-3 px-4 py-16 ">
          <h1 className="text-5xl font-semibold  text-white sm:text-7xl">
            ShinyDexTracker
          </h1>
          <h3 className="text-center text-2xl font-light capitalize text-white sm:text-4xl">
            The best way to Manage and Keep track of your Shiny Pokémon
          </h3>
          <div className="flex flex-col items-center gap-2"></div>
        </div>
      </main>
    </>
  );
}
