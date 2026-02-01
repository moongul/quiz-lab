import Link from "next/link";

export default function PublicLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <header className="glass-card sticky top-0 z-50 border-b border-white/20">
                <nav className="max-w-2xl mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/" className="text-2xl font-bold text-gradient flex items-center gap-2">
                        <span className="text-3xl">🧪</span>
                        Quiz Lab
                    </Link>
                    <span className="text-sm text-purple-500 font-medium px-3 py-1 bg-purple-50 rounded-full">
                        ✨ 심리테스트
                    </span>
                </nav>
            </header>
            <main className="max-w-2xl mx-auto px-4 py-8">
                {children}
            </main>
            <footer className="glass-card border-t border-white/20 mt-auto">
                <div className="max-w-2xl mx-auto px-4 py-8">
                    <div className="flex flex-wrap justify-center gap-4 mb-4 text-sm">
                        <Link href="/about" className="text-gray-600 hover:text-purple-600 transition-colors">
                            소개
                        </Link>
                        <Link href="/contact" className="text-gray-600 hover:text-purple-600 transition-colors">
                            문의하기
                        </Link>
                        <Link href="/privacy" className="text-gray-600 hover:text-purple-600 transition-colors">
                            개인정보처리방침
                        </Link>
                        <Link href="/terms" className="text-gray-600 hover:text-purple-600 transition-colors">
                            이용약관
                        </Link>
                    </div>
                    <p className="text-center text-sm text-gray-500">
                        © 2026 Quiz Lab. 재미로 보는 심리테스트 💜
                    </p>
                    <p className="text-center text-xs text-gray-400 mt-2">
                        모든 테스트는 오락 목적이며 전문적인 진단을 대체하지 않습니다.
                    </p>
                </div>
            </footer>
        </>
    );
}
