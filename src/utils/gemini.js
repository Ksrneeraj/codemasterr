import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyD-qi74jo8MLGQ4qmevwxm21X5E1Bwtmjk";
const genAI = new GoogleGenerativeAI(API_KEY);

export const getGeminiResponse = async (prompt) => {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        return text;
    } catch (error) {
        console.error("Error fetching Gemini response:", error);
        return "Sorry, I encountered an error while trying to reach Gemini. Please try again later.";
    }
};
