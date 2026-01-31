import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const hasTitle = searchParams.has('title');
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'Quiz Lab';

    const hasDesc = searchParams.has('desc');
    const desc = hasDesc
      ? searchParams.get('desc')?.slice(0, 200)
      : '재미있는 심리테스트로 나를 알아가는 시간 ✨';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: 'linear-gradient(to bottom right, #8B5CF6, #EC4899)',
            padding: '40px',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '20px',
              padding: '40px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
              width: '90%',
              height: '80%',
            }}
          >
            <div
              style={{
                fontSize: 60,
                fontWeight: 'bold',
                color: '#1F2937',
                marginBottom: 20,
                lineHeight: 1.2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: 30,
                color: '#4B5563',
                lineHeight: 1.4,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                maxWidth: '80%',
              }}
            >
              {desc}
            </div>
            <div
              style={{
                marginTop: 40,
                fontSize: 24,
                color: '#8B5CF6',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              🧪 Quiz Lab
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
