import React from 'react';
import './Description.css';

const Description = (props) => {
  const { strDescriptionEN, strDescriptionES, strDescriptionDE, strDescriptionFR } = props.league;

  /*  Conditional Formatting or Rendering
      using Conditional (ternary) operator  */
  const spanish = <p>{strDescriptionES}</p>;
  const french = <p>{strDescriptionFR}</p>;
  const german = <p>{strDescriptionDE}</p>;
  const spanishOrFrenchOrGerman = !strDescriptionES ? french : (!strDescriptionFR ? german : spanish);
  
  return (
    <div className="p-3 description">
      <p className="py-5">{strDescriptionEN}</p>
      {spanishOrFrenchOrGerman}
    </div>
  );
};

export default Description;