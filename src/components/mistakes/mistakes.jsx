import PropTypes from 'prop-types';
import React from 'react';

const Mistakes = (props) => {
  const {count} = props;

  const mistakes = new Array(count).fill(``);

  return (
    <div className="game__mistakes">
      {mistakes.map((_, index) => {
        return <div key={`mistake-${index}`} className="wrong" />;
      })}
    </div>
  );
};

Mistakes.propTypes = {
  count: PropTypes.number.isRequired
};

export default Mistakes;
