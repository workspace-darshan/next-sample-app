import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import temp from "../public/pf-12.jpg";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const session = useSession()
  console.log("🚀 ~ Home ~ session:", session.data)

  return (
    <div className="container mx-auto my-10">
      <br />
      {session.data === null ?
        <>
          <h1 className="font-bold text-2xl">Plz sign in first Darshan</h1>
          <br />
          <button className="bg-slate-500 p-3 rounded" onClick={() => signIn()}>Sign in</button>
        </>
        :
        <>
          <h1 className="font-bold text-2xl">Sign in successfull Darshan</h1>
          <ul>
            <li>{session?.data?.user?.name}</li>
            <li>{session?.data?.user?.email}</li>
            <li>
              <Image
                src={session?.data?.user?.image}
                alt="profile"
                width={100}
                height={100}
              />
            </li>
          </ul>
          <br />
          <button className="bg-slate-500 p-3 rounded" onClick={() => signOut()}>Sign Out</button>
        </>
      }
    </div>
  );
}
