import openai from "@/lib/chatgpt";
import { NextResponse } from "next/server";

type Option = {
  value: string;
  label: string;
};

type Data = {
  modelOptions: Option[];
};

export async function GET(request: Request) {
  const models = await openai.listModels().then((res) => res.data.data);

  //   console.log(models);

  const modelOptions = models.map((model) => ({
    value: model.id,
    label: model.id,
  }));
//   console.log(modelOptions);

  //   return new Response("Hello, Next.js!");
  return NextResponse.json({ modelOptions }), { status: 200 };
}
