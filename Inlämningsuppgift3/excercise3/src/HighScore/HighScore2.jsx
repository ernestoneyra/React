import React from 'react'
import Scoreblock2 from "../ScoreBlock2/ScoreBlock2";

export default function Highscore2({score}) {
    return (
        <div>
            <div className="">
      <Scoreblock2 key={score.id} score={score} />
    </div>
        </div>
    )
}
