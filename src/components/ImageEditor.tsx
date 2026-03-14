import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Edit2, Loader2, X, Image as ImageIcon } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

interface ImageEditorProps {
  src: string;
  alt: string;
  className?: string;
  onImageGenerated?: (newSrc: string) => void;
  defaultPrompt?: string;
}

export function ImageEditor({ src, alt, className, onImageGenerated, defaultPrompt = '' }: ImageEditorProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [isEditing, setIsEditing] = useState(false);
  const [prompt, setPrompt] = useState(defaultPrompt);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    setError(null);

    try {
      // Check if API key is selected
      // @ts-ignore
      if (window.aistudio && !await window.aistudio.hasSelectedApiKey()) {
        // @ts-ignore
        await window.aistudio.openSelectKey();
      }

      // We must create a new instance right before making the call to get the latest key
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || process.env.GEMINI_API_KEY });

      const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-image-preview',
        contents: {
          parts: [{ text: prompt }],
        },
        config: {
          imageConfig: {
            aspectRatio: "3:4",
            imageSize: "1K"
          }
        }
      });

      let newImageUrl = '';
      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          newImageUrl = `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
          break;
        }
      }

      if (newImageUrl) {
        setCurrentSrc(newImageUrl);
        if (onImageGenerated) {
          onImageGenerated(newImageUrl);
        }
        setIsEditing(false);
      } else {
        throw new Error('No image generated');
      }
    } catch (err: any) {
      console.error('Image generation error:', err);
      if (err.message?.includes('Requested entity was not found')) {
        // @ts-ignore
        if (window.aistudio) await window.aistudio.openSelectKey();
        setError('请重新选择 API Key 后重试');
      } else {
        setError(err.message || '生成图片失败，请重试');
      }
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className={`relative group ${className}`}>
      <img src={currentSrc} alt={alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102" referrerPolicy="no-referrer" />
      
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsEditing(true);
        }}
        className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white text-lumina-green z-20"
        title="重新生成图片"
      >
        <Edit2 size={18} />
      </button>

      <AnimatePresence>
        {isEditing && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => !isGenerating && setIsEditing(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden z-10"
              onClick={e => e.stopPropagation()}
            >
              <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h3 className="text-xl font-serif text-lumina-green flex items-center gap-2">
                  <ImageIcon size={20} />
                  AI 重新生成图片
                </h3>
                <button 
                  onClick={() => setIsEditing(false)}
                  disabled={isGenerating}
                  className="text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-50"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    输入提示词 (Prompt)
                  </label>
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="描述你想要的图片画面..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-lumina-green focus:border-transparent resize-none h-32 text-sm"
                    disabled={isGenerating}
                  />
                </div>

                {error && (
                  <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg">
                    {error}
                  </div>
                )}

                <button
                  onClick={handleGenerate}
                  disabled={isGenerating || !prompt.trim()}
                  className="w-full py-3 bg-lumina-green text-white rounded-xl font-medium hover:bg-lumina-green/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      正在生成中... (可能需要几分钟)
                    </>
                  ) : (
                    '开始生成'
                  )}
                </button>
                
                <p className="text-xs text-gray-500 mt-4 text-center">
                  使用 Gemini 3.1 Flash Image Preview 模型生成
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
