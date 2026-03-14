import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generateImage(prompt: string, filename: string) {
  console.log(`Generating image for: ${prompt}`);
  const response = await ai.models.generateContent({
    model: 'gemini-3.1-flash-image-preview',
    contents: {
      parts: [
        {
          text: prompt,
        },
      ],
    },
    config: {
      imageConfig: {
        aspectRatio: "3:4",
        imageSize: "1K"
      }
    },
  });
  
  for (const part of response.candidates[0].content.parts) {
    if (part.inlineData) {
      const base64Data = part.inlineData.data;
      const buffer = Buffer.from(base64Data, 'base64');
      const dir = path.join(process.cwd(), 'public', 'images');
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFileSync(path.join(dir, filename), buffer);
      console.log(`Saved ${filename}`);
    }
  }
}

async function main() {
  await generateImage("A scientist in a greenhouse looking through a microscope at a plant, scientific guardianship, high quality, realistic, cinematic lighting", "scientific-guardianship.png");
  await generateImage("A young man shaking hands with an old farmer in an apple orchard, connecting with farmers, high quality, realistic, warm sunlight", "connect-farmers.png");
  await generateImage("A person holding a smartphone in an orchard, the smartphone screen shows a real-time monitoring app of the fruit trees, witness in real time, high quality, realistic", "real-time.png");
  await generateImage("A group of diverse people including farmers, scientists, and young people standing together in a modern agricultural field with futuristic holographic data rings, be part of the change, high quality, realistic", "co-create.png");
}

main().catch(console.error);
