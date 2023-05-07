"use client";

import { collection, orderBy, query } from "firebase/firestore";
import { useSession, signOut } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "@/firebase";
import ChatRow from "./ChatRow";
import NewChat from "./NewChat";

export default function SideBar() {
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session?.user?.email!, "chats")
        // orderBy("createdAt", "asc")
      )
  );

  console.log(chats);
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1">
        <div>
          <NewChat />
        </div>
        {/* chat = each object in the "chats" column */}
        {chats?.docs.map((chat) => (
          <ChatRow key={chat.id} id={chat.id} />
        ))}
      </div>

      {session && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          onClick={() => signOut()}
          className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
          src={session.user?.image!}
          // width={50}
          // height={50}
          alt="Profile pic"
        />
      )}
    </div>
  );
}
