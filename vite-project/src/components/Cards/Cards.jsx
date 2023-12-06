import "../Cards/Cards.modules.css";
import Card from "../Card/Card";

function Cards({ allVideogames }) {
  const videogameList = allVideogames;
  return (
    <div>
      <div className="Cards">
        {videogameList?.map((game) => (
          <Card game={game} key={game.id} />
        ))}
      </div>
    </div>
  );
}

export default Cards;
