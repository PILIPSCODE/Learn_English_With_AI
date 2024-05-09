import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const { problem } = body;
    const genAI = new GoogleGenerativeAI(process.env.GENERATIVE_AI_API_KEY!);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = ` 
    Please check and correct this sentence "${problem}" And give the answer or response to this sentence. return with object form, if the sentence is correct:{response:(your response)},
    if something is wrong:{correct:(corrected sentece),response:(your response)}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json(text);
  } catch (error) {
    console.log(error);
  }
};
