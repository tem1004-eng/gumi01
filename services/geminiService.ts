
import { GoogleGenAI } from "@google/genai";
import { RegistrationData } from "../types";

export const generateWelcomeMessage = async (data: RegistrationData): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `
    당신은 기독교 교육 전문가입니다. 
    구미노회 교육부에서 주관하는 "AI 시대와 목회" 세미나에 참여 신청을 한 분에게 따뜻한 환영 인사를 건네주세요.
    
    신청자 정보:
    - 교회명: ${data.churchName}
    - 성함: ${data.name}
    - 직분: ${data.position}
    
    메시지 포함 내용:
    1. ${data.name} ${data.position}님에 대한 환영과 축복.
    2. AI 시대가 목회에 주는 기회와 도전에 대해 짧고 통찰력 있는 한마디.
    3. 세미나 참석이 목회 사역에 큰 도움이 되길 바라는 응원.
    4. 3-4문장 이내로 정중하고 따뜻하게 작성해주세요.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    return response.text || "세미나 신청이 완료되었습니다. 현장에서 뵙기를 고대합니다!";
  } catch (error) {
    console.error("AI Message Generation Error:", error);
    return "세미나 신청이 정상적으로 완료되었습니다. AI 시대와 목회의 미래를 함께 고민하는 귀한 시간이 되길 기도합니다.";
  }
};
