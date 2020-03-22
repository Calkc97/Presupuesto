import React, { Fragment, useState } from "react";
import Error from "./Error";
import PropTypes from "prop-types";

const Pregunta = ({guardarPresupuesto,guardarRestante,acualizarPregunta}) => {
  // Definir el state
  const [canitdad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  // Funcion que lee el presupuesto
  const definirPresupuesto = e => {
    guardarCantidad(parseInt(e.target.value, 10));
  };

  // Submit para definir el presupuesto
  const agregarPresupuesto = e => {
    e.preventDefault();

    // Validar
    if (canitdad < 1 || isNaN(canitdad)) {
      guardarError(true);
      return;
    }

    // Si se pasa la validacion
    guardarError(false);
    guardarPresupuesto(canitdad);
    guardarRestante(canitdad);
    acualizarPregunta(false);
  };

  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>
      {error ? <Error mensaje="El presupuesto es incorrecto" /> : null}

      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloa tu presupuesto"
          onChange={definirPresupuesto}
        />
        <input
          className="u-full-width button-primary"
          type="submit"
          value="Definir presupuesto"
        />
      </form>
    </Fragment>
  );
};

Pregunta.propTypes = {
  guardarPresupuesto: PropTypes.func.isRequired,
  guardarRestante: PropTypes.func.isRequired,
  acualizarPregunta: PropTypes.func.isRequired
};



export default Pregunta;
