import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const { problem } = body;
    
    const genAI = new GoogleGenerativeAI(process.env.GENERATIVE_AI_API_KEY!);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = `Now you are an expert in English grammar. Please check and correct this sentence "${problem}" And give response about questions as a human, just 1 sentence, just answer without explanation. return with form = correct:(corrected sentece),response:(your response)`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    const res = await convertToStringObject(text);


   return NextResponse.json(res);
    
  } catch (error) {
    console.log(error);
  }
};


function convertToStringObject(str:string) {
  // Split the string by colon (":") and comma (",")
  const parts = str.split(/:|,/).map(part => part.trim());
 
    return {
      correct: parts[1],
      response: parts[3]
    };

   
    
}