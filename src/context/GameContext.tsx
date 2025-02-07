import { createContext, ReactNode, useState } from 'react';

type GameContextType = {
  screen: string;
  setScreen: (screen: string) => void;
  players: { P1: string; P2: string };
  setPlayers: (players: { P1: string; P2: string }) => void;
};

export const GameContext = createContext<GameContextType | undefined>(undefined);

const GameProvider = ({ children }: { children: ReactNode }) => {
  const [screen, setScreen] = useState('home');
  const [players, setPlayers] = useState({ P1: '', P2: '' });

  return (
    <GameContext.Provider value={{ screen, setScreen, players, setPlayers }}>
      {children}
    </GameContext.Provider>
  );
};

export { GameProvider };
