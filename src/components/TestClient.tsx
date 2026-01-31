"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface Question {
  id: string;
  content: string;
  options: {
    id: string;
    content: string;
    scores: Record<string, number>;
  }[];
}

interface TestClientProps {
  testSlug: string;
  testTitle: string;
  questions: Question[];
}

export default function TestClient({ testSlug, testTitle, questions }: TestClientProps) {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [isTransitioning, setIsTransitioning] = useState(false);

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  const handleSelect = async (option: Question["options"][0]) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    const newScores = { ...scores };
    Object.entries(option.scores).forEach(([type, score]) => {
      newScores[type] = (newScores[type] || 0) + score;
    });
    setScores(newScores);

    await new Promise(resolve => setTimeout(resolve, 300));

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsTransitioning(false);
    } else {
      const resultType = Object.entries(newScores).reduce((a, b) =>
        a[1] > b[1] ? a : b
      )[0];

      await fetch("/api/stats", {
        method: "POST",
        body: JSON.stringify({ testSlug, resultType }),
      });

      router.push(`/result/${testSlug}/${resultType}`);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="inline-block px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-3">
          {testTitle}
        </div>
        <div className="flex items-center justify-center gap-2">
          <span className="text-3xl font-bold text-gradient">{currentIndex + 1}</span>
          <span className="text-gray-400 text-lg">/</span>
          <span className="text-gray-400 text-lg">{questions.length}</span>
        </div>
      </div>

      <div className="relative">
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div
            className="progress-gradient h-3 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="absolute -top-1 transition-all duration-500" style={{ left: `calc(${progress}% - 12px)` }}>
          <span className="text-xl">🏃</span>
        </div>
      </div>

      <div className={`glass-card rounded-2xl p-6 sm:p-8 animate-pulse-glow transition-opacity duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
        <div className="text-center mb-8">
          <span className="text-4xl block mb-4 animate-float">🤔</span>
          <h2 className="text-xl font-bold text-gray-800">
            {currentQuestion.content}
          </h2>
        </div>

        <div className="space-y-3">
          {currentQuestion.options.map((option, idx) => (
            <button
              key={option.id}
              onClick={() => handleSelect(option)}
              disabled={isTransitioning}
              className="w-full p-4 text-left bg-white border-2 border-gray-100 rounded-xl hover:border-purple-400 hover:bg-purple-50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group disabled:opacity-50"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 flex-shrink-0 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center text-sm font-bold text-purple-600 group-hover:from-purple-500 group-hover:to-pink-500 group-hover:text-white transition-all">
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className="font-medium text-gray-700 group-hover:text-purple-700">
                  {option.content}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <p className="text-center text-sm text-gray-400">
        💜 솔직하게 답해주세요! 정답은 없어요
      </p>
    </div>
  );
}
