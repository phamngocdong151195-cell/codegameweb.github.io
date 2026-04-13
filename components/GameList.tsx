import { Game } from '@/types';
import GameCard from './GameCard';

type GameListProps = {
  games: Game[];
};

const GameList = ({ games }: GameListProps) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 px-0 sm:px-4">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default GameList;
