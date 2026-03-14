import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generateImage(prompt, filename) {
  console.log(`Generating image for: ${prompt}`);
  try {
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
        fs.writeFileSync(path.join(process.cwd(), 'public', filename), buffer);
        console.log(`Saved ${filename}`);
        return;
      }
    }
    console.log(`No image found for ${filename}`);
  } catch (e) {
    console.error(`Error generating ${filename}:`, e);
  }
}

async function main() {
  await generateImage("A high-quality, cinematic photo of a scientist in a modern greenhouse laboratory, carefully examining a lychee plant under a microscope. Natural sunlight streaming through the glass roof, clean and professional atmosphere, scientific guardianship.", "scientific_guardianship.png");
  
  await generateImage("A high-quality, heartwarming photo of a young person shaking hands with an elderly, smiling Chinese fruit farmer in a lush lychee orchard at golden hour. The young person is holding a smartphone recording the moment. Warm, authentic, connecting with farmers.", "connect_farmers.png");
  
  await generateImage("A high-quality, close-up photo over the shoulder of a person holding a smartphone in a lychee orchard. The smartphone screen shows a live video feed of a lychee tree with data overlays. The person is wearing smart glasses. High-tech agriculture, real-time monitoring.", "real_time_witness.png");
  
  await generateImage("A high-quality, futuristic yet natural photo of a diverse group of people (farmers, scientists, and young consumers) standing together in a beautiful terraced orchard. Glowing holographic data rings and a glowing cube hover above the orchard, symbolizing a shared, tech-enabled future. Be part of the change.", "co_create_future.png");
}

main();
