import { useParams } from "react-router-dom";

const Scoreblock2 = ({ scores, homeScore }) => {
  const { slug } = useParams();
  //const game = games.find((game) => game.urlSlug === slug);
  const score = homeScore.filter((score) => score.urlSlug === slug);
  const scoress = scores.filter((score) => score.urlSlug === slug);

  const combined = [...score, ...scoress];

  const sorted = combined.sort((a, b) =>
    b.highscore.localeCompare(a.highscore)
  );

  return (
    <div className="d-flex row">
      <div>
        {sorted.map((score) => (
          <div key={score.id} className="border p-3 mb-2">
            <div className="mt-2">
              {score.player}, {score.date}, {score.urlSlug}
              <p className="float-end">{score.highscore} p</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scoreblock2;
