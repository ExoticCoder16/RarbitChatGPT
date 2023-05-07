import openai from "./chatgpt";

const query = async (prompt: string, chatId: string, model: string) => {
  const res = await openai
    .createCompletion({
      model,
      prompt,
      temperature: 0.9,
      max_tokens: 1000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    // .then((res) => res.data.choices[0].text)
    .then((res) => res.data.choices[0].message)
    .catch(
      (err) =>
        //implicit return
        `ChatGPT was unable to find an answer for that! (Error: ${err.message})`
    );
  return res;
};

//429 error code - too many request

export default query;
