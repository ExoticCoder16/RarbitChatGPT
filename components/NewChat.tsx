import { db } from "@/firebase";
import { PlusIcon } from "@heroicons/react/20/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function NewChat() {
  const router = useRouter();
  const { data: session } = useSession();

  const createNewChat = async () => {
    // add a JSON object to the database "chats" column
    const doc = await addDoc(
      collection(db, "users", session?.user?.email!, "chats"),
      {
        // messages: [],
        userId: session?.user?.email!,
        createAt: serverTimestamp(),
      }
    );

    //after adding the new chat data to firebase,
    //then the { children } / main page directs to the [id] page ( the content of the new chat )
    // doc = in the "chats" column each object, id = that object's id
    router.push(`/chat/${doc.id}`);
  };

  return (
    <div onClick={createNewChat} className="border-gray-700 border chatRow">
      <PlusIcon className="h-4 w-4" />
      <p>New Chat</p>
    </div>
  );
}
