"use client";

interface ShareButtonsProps {
  testTitle: string;
  resultTitle: string;
}

export default function ShareButtons({ testTitle, resultTitle }: ShareButtonsProps) {
  const shareText = `${testTitle} 결과: ${resultTitle}`;
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  const handleKakaoShare = () => {
    if (typeof window !== "undefined" && window.Kakao) {
      window.Kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title: resultTitle,
          description: `나의 ${testTitle} 결과를 확인해보세요!`,
          imageUrl: "",
          link: {
            mobileWebUrl: shareUrl,
            webUrl: shareUrl,
          },
        },
        buttons: [
          {
            title: "테스트 하러가기",
            link: {
              mobileWebUrl: shareUrl,
              webUrl: shareUrl,
            },
          },
        ],
      });
    }
  };

  const handleTwitterShare = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(url, "_blank");
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      alert("링크가 복사되었습니다!");
    } catch {
      alert("링크 복사에 실패했습니다.");
    }
  };

  return (
    <div className="glass-card rounded-2xl p-5">
      <p className="text-sm text-gray-600 text-center mb-4 font-medium">
        📤 친구에게 공유하기
      </p>
      <div className="flex gap-3 justify-center">
        <button
          onClick={handleKakaoShare}
          className="flex-1 max-w-[120px] py-3 bg-[#FEE500] text-[#3C1E1E] rounded-xl text-sm font-bold hover:scale-105 active:scale-95 transition-transform shadow-lg shadow-yellow-200"
        >
          💬 카카오톡
        </button>
        <button
          onClick={handleTwitterShare}
          className="flex-1 max-w-[120px] py-3 bg-[#1DA1F2] text-white rounded-xl text-sm font-bold hover:scale-105 active:scale-95 transition-transform shadow-lg shadow-blue-200"
        >
          🐦 트위터
        </button>
        <button
          onClick={handleCopyLink}
          className="flex-1 max-w-[120px] py-3 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-xl text-sm font-bold hover:scale-105 active:scale-95 transition-transform shadow-lg"
        >
          🔗 링크복사
        </button>
      </div>
    </div>
  );
}

declare global {
  interface Window {
    Kakao: {
      init: (key: string) => void;
      isInitialized: () => boolean;
      Share: {
        sendDefault: (settings: object) => void;
      };
    };
  }
}
