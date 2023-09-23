import OpenAI from "openai";
import { OPENAI_KEY } from "../utils/constOpenAIkey";

const openai = new OpenAI({
  //apiKey: OPENAI_KEY,
  apiKey: process.env.REACT_APP_OPENAI_KEY,
  dangerouslyAllowBrowser: true, // defaults to process.env["OPENAI_API_KEY"]
});

export default openai;
