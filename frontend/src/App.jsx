import GameCard from "./components/GameCard";
import NameCard from "./components/NameCard";

function App() {
  return (
    <div className="bg-pink-400 px-40 min-h-screen">
      <header className="bg-blue-900 mx-10 px-10 py-10 flex items-center justify-between text-right">
        <NameCard />
      </header>
      <body className="px-5 py-5 flex justify-center">
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
      </body>
    </div>
  );
}

export default App;
