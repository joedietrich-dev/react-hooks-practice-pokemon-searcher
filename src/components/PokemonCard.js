import React from "react";
import { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon: { name, hp, sprites } }) {
  const [isShowingFront, setIsShowingFront] = useState(true);
  return (
    <Card>
      <div onClick={() => setIsShowingFront(o => !o)}>
        <div className="image">
          <img alt={name} src={isShowingFront ? sprites.front : sprites.back} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
