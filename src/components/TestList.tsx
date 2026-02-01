"use client";

import { useState } from "react";
import Link from "next/link";
import { type tests } from "@/lib/db/schema";
import { type InferSelectModel } from "drizzle-orm";

type Test = InferSelectModel<typeof tests>;

const TEST_EMOJIS: Record<string, string> = {
    "animal-personality": "🐾",
    "thinking-feeling": "🧠",
    "love-style": "💕",
    "burnout-level": "🔥",
    "my-color": "🎨",
    "past-life": "👑",
    "homebody-level": "🏠",
    "mz-generation": "📱",
    "money-type": "💰",
    "work-style": "💼",
    "smartphone-addiction": "🤳",
    "bread-personality": "🥐",
    "travel-style": "✈️",
    "friendship-style": "🤝",
    "mental-age": "👶",
};

const CATEGORY_MAP: Record<string, string> = {
    "love-style": "❤️ 연애",
    "friendship-style": "❤️ 연애",
    "work-style": "💼 직업",
    "money-type": "💼 직업",
    "burnout-level": "💼 직업",
    "animal-personality": "🧠 성격",
    "thinking-feeling": "🧠 성격",
    "my-color": "🧠 성격",
    "bread-personality": "🧠 성격",
    "homebody-level": "🧠 성격",
    "mz-generation": "🤣 예능",
    "smartphone-addiction": "🤣 예능",
    "past-life": "🤣 예능",
    "travel-style": "🤣 예능",
    "mental-age": "🤣 예능",
};

const CATEGORIES = ['✨ 전체', '❤️ 연애', '💼 직업', '🧠 성격', '🤣 예능'];

interface TestListProps {
    initialTests: Test[];
}

export default function TestList({ initialTests }: TestListProps) {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("✨ 전체");

    const filteredTests = initialTests.filter((test) => {
        // 1. Category Filter
        if (selectedCategory !== "✨ 전체") {
            const testCategory = CATEGORY_MAP[test.slug] || "🧠 성격"; // Default to Personality if unknown
            if (testCategory !== selectedCategory) return false;
        }

        // 2. Search Filter
        if (searchTerm) {
            const lowerTerm = searchTerm.toLowerCase();
            const matchTitle = test.title.toLowerCase().includes(lowerTerm);
            const matchDesc = test.description.toLowerCase().includes(lowerTerm);
            return matchTitle || matchDesc;
        }

        return true;
    });

    return (
        <>
            {/* Search & Functionality Section */}
            <div className="sticky top-4 z-20 mb-10 space-y-4">
                {/* Search Bar */}
                <div className="relative group">
                    <div className="absolute inset-0 bg-pink-200 blur-xl opacity-20 group-hover:opacity-30 transition-opacity rounded-2xl"></div>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="찾고 싶은 테스트가 있나요?"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full py-4 pl-14 pr-4 rounded-2xl search-input text-gray-700 shadow-sm placeholder-gray-400 font-medium"
                        />
                        <span className="absolute left-5 top-1/2 -translate-y-1/2 text-xl opacity-50">🔍</span>
                    </div>
                </div>

                {/* Filter Chips */}
                <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
                    {CATEGORIES.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => setSelectedCategory(tag)}
                            className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-bold transition-all active:scale-95 ${selectedCategory === tag
                                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-200 hover:shadow-purple-300 transform hover:-translate-y-0.5'
                                    : 'bg-white/80 backdrop-blur-sm text-gray-500 border border-white/50 shadow-sm hover:bg-white hover:text-purple-500'
                                }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Grid */}
            <section>
                <div className="flex items-center justify-between mb-6 px-1">
                    <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                        {selectedCategory === '✨ 전체' ? '🔥 인기 테스트' : `${selectedCategory} 테스트`}
                    </h2>
                    <span className="text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                        {filteredTests.length}개
                    </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {filteredTests.length === 0 ? (
                        <div className="col-span-full py-20 text-center glass-panel rounded-3xl">
                            <span className="text-6xl block mb-4 filter grayscale opacity-50">🔍</span>
                            <p className="text-gray-500 font-medium">
                                {searchTerm ? `'${searchTerm}'에 대한 검색 결과가 없어요!` : '아직 등록된 테스트가 없어요!'}
                            </p>
                        </div>
                    ) : (
                        filteredTests.map((test, index) => (
                            <Link
                                key={test.id}
                                href={`/test/${test.slug}`}
                                className="group block"
                            >
                                <div className="glass-card rounded-3xl p-1.5 h-full transition-all duration-300 hover:shadow-xl hover:shadow-purple-100/50">
                                    <div className="bg-white/50 rounded-[22px] p-5 h-full flex items-center gap-5 transition-colors group-hover:bg-white/80">
                                        {/* Emoji Container */}
                                        <div className={`w-20 h-20 flex-shrink-0 rounded-2xl flex items-center justify-center shadow-inner relative overflow-hidden group-hover:scale-105 transition-transform duration-300`}>
                                            <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${index % 2 === 0 ? 'from-purple-400 to-pink-400' : 'from-blue-400 to-cyan-400'}`}></div>
                                            <span className="text-4xl emoji-3d relative z-10">
                                                {TEST_EMOJIS[test.slug] || "🎲"}
                                            </span>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 min-w-0 py-1">
                                            <h3 className="font-bold text-gray-800 text-[17px] leading-tight mb-1.5 truncate pr-2">
                                                {test.title}
                                            </h3>
                                            <p className="text-xs text-gray-500 line-clamp-2 mb-3 leading-relaxed">
                                                {test.description}
                                            </p>
                                            <div className="flex items-center gap-2">
                                                <span className="px-2 py-0.5 bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-700 text-[10px] font-bold rounded-md border border-purple-100">
                                                    HOT
                                                </span>
                                                <span className="text-[11px] text-gray-400 flex items-center gap-1">
                                                    👤 {test.totalParticipants?.toLocaleString()}명
                                                </span>
                                            </div>
                                        </div>

                                        {/* Arrow Icon */}
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity -ml-2 text-purple-400">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    )}
                </div>
            </section>
        </>
    );
}
