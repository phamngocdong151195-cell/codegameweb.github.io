import { GAMES } from '@/data/static';
import CodeList from '@/components/CodeList';
import { notFound } from 'next/navigation';
import Link from 'next/link';

type GamePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return GAMES.map((game) => ({
    slug: game.slug,
  }));
}

export default async function GamePage({ params }: GamePageProps) {
  const { slug } = await params;

  const game = GAMES.find((g) => g.slug === slug);

  if (!game) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Quay lại
          </Link>
        </div>

        {/* Game Header */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row items-center gap-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <div className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 rounded-xl overflow-hidden border-2 border-cyan-400 shadow-lg">
              <img
                src={game.image}
                alt={game.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                {game.name}
              </h1>
              <p className="text-slate-400 text-lg">
                Tổng cộng:{' '}
                <span className="text-cyan-400 font-semibold">
                  {game.codes.length}
                </span>{' '}
                mã code
              </p>
            </div>
          </div>
        </div>

        {/* Codes Section */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8">
            Danh sách mã code
          </h2>
          <CodeList codes={game.codes} />
        </div>
      </main>
    </div>
  );
}
