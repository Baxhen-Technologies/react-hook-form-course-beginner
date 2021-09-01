import React, { useEffect } from 'react';
import './styles.css';

const Result = ({ setShow }) => {
  useEffect(() => {
    setShow(false);
    return () => setShow(true);
  }, [setShow]);

  return (
    <div className="result">
      <div className="result__card">
        <h1 className="result__title">Obrigado por realizar o seu cadastro!</h1>
        <h3 className="result__subtitle">
          Confirme o seu email antes de realizar os próximos passos.
        </h3>
      </div>
    </div>
  );
};

export default Result;
