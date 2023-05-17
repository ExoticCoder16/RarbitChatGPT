import openai from "./chatgpt";

export default async function query(
  prompt: string,
  chatId: string,
  model: string
) {
  // const query = async (prompt: string, chatId: string, model: string) => {
  const res = await openai
    .createChatCompletion({
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
      // n: 1,
      // stream: false,
      // stream: true,
    })
    .then((res) => res.data.choices[0].message?.content)
    .catch(
      (err) =>
        //implicit return
        `ChatGPT was unable to find an answer for that! (Error: ${err.message})`
    );
  return res;
}

//429 error code - too many request

// export default query;
