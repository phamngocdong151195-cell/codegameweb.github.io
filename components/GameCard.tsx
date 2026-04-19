import { Game } from '@/types';
import Link from 'next/link';
import Image from 'next/image';

type GameCardProps = {
  game: Game;
};

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Link 
      href={`/games/${game.slug}`} 
      className="group relative overflow-hidden rounded-xl border border-slate-700 bg-slate-800/30 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20"
    >
      <div className="relative overflow-hidden h-40 sm:h-48">
        <Image 
          src={game.image} 
          alt={game.name} 
          width={400} 
          height={250} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
          unoptimized 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="relative p-4">
        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-200">
          {game.name}
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          {/* {game.codes.length} mã code */}
        </p>
      </div>
      <div className="absolute inset-0 rounded-xl border-2 border-cyan-400/0 group-hover:border-cyan-400/50 transition-all duration-300 pointer-events-none" />
    </Link>
  );
};

export default GameCard;
