import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  // apiKey: process.env.OPENAI_API_KEY,
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

export default openai;
