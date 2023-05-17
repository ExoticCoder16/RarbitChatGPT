import { NextResponse } from "next/server";
// import query from "@/lib/queryApi";
import admin from "firebase-admin";
import { adminDb } from "@/firebaseAdmin";
import openai from "@/lib/chatgpt";

// type Data = {
//   answer: string;
// };

export async function POST(request: Request) {
  // extract data in the body of the POST req from chatInput to this API
  const { prompt, chatId, model, session } = await request.json();

  if (!prompt) {
    return (
      NextResponse.json({ answer: "Please provide a prompt!" }), { status: 400 }
    );
  }
  if (!chatId) {
    return (
      NextResponse.json({ answer: "Please provide a prompt!" }), { status: 400 }
    );
  }

  // ChatGPT Query
  const response = await openai.createChatCompletion({
    model,
    messages: [
      { role: "system", content: "You are a helpful assistant" },
      { role: "user", content: `${prompt}` },
    ],
    temperature: 0.9,
    max_tokens: 1000,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  const { data } = response;

  const answer = data.choices[0].message?.content;

  const message: Message = {
    text: answer,
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: "ChatGPT",
      name: "ChatGPT",
      // avatar: "https://links.papareact.com/89k",
      avatar:
        "https://brandlogovector.com/wp-content/uploads/2023/01/ChatGPT-Icon-Logo-PNG.png",
    },
  };

  console.log(message);

  await adminDb
    .collection("users")
    .doc(session?.user?.email)
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .add(message);

  // Produce a response with the given JSON body.
  // res.status(200).json({ answer: message.text });
  return NextResponse.json({ answer: message.text });
}
