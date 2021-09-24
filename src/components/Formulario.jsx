import React, { useState } from 'react'
import shortid from 'shortid'
import Error from './Error'

function Formulario({setGasto,setCrearGasto,restante}) {
    const [nombre,setNombre] = useState('')
    const [cantidad,setCantidad] = useState(0)
    const [error,setError] = useState(false)

    const agregarGasto = e => {
        e.preventDefault()

        //Validar
        
        if(cantidad < 1 || isNaN(cantidad) || nombre.trim()==='' || restante < 1){
            setError(true)
            return
        }
        setError(false)
        //Construir el gasto
        const gasto = {
            nombre,
            cantidad,
            id:shortid.generate()
        }

        //Pasar el gasto al componente principal
        setGasto(gasto)
        setCrearGasto(true)

        //Resetear el form
        setNombre('')
        setCantidad(0)
    }
    return (
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aqui</h2>
            {error && <Error mensaje="Ambos campos son obligatorios o Presupuesto incorrecto"/>}
            <div className="campo">
                <label htmlFor="">Nombre Gasto</label>
                <input
                    type="text"
                    name="nombre"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={e =>setNombre(e.target.value) }
                />
            </div>
            <div className="campo">
                <label htmlFor="">Cantidad Gasto</label>
                <input
                    type="number"
                    name="cantidad"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cantidad}
                    onChange={e =>setCantidad(parseInt(e.target.value),10) }
                />
            </div>
            <input
                type="submit"
                value="Agregar Gasto"
                className="button-primary u-full-width"
            />
        </form>
    )
}

export default Formulario
