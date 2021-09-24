import React, { useState } from 'react'
import Error from './Error'

function Pregunta({setPresupuesto,setRestante,setMostrarPregunta}) {
    const [cantidad,setCantidad] = useState(0)
    const [error,setError] = useState(false)

    const definirPresupuesto = (e) => {
        setCantidad(parseInt(e.target.value,10))
    }

    const agregarPresupuesto = (e) => {
        e.preventDefault()

        //Validar
        if(cantidad<1 || isNaN(cantidad)){
            setError(true)
            return
        }

        //Si se pasa la validacion
        setError(false)
        setPresupuesto(cantidad)
        setRestante(cantidad)
        setMostrarPregunta(false)
    }


    return (
        <>
            <h2>Coloca tu Presupuesto</h2>
            {error && (<Error mensaje="El Presupuesto es incorrecto"/>)}
            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu Presupuesto"
                    onChange={definirPresupuesto}
                />

                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto  "
                />
            </form>
        </>
    )
}

export default Pregunta
