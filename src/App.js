import { useEffect, useState } from "react";
import ControlPresupuesto from "./components/ControlPresupuesto";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import Pregunta from "./components/Pregunta";

function App() {
  const [presupuesto,setPresupuesto] = useState(0)
  const [restante,setRestante] = useState(0)
  const [mostrarpregunta,setMostrarPregunta] = useState(true)
  const [gastos,setGastos] = useState([])
  const [gasto,setGasto] = useState({})
  const [crearGasto,setCrearGasto] = useState(false)

  useEffect(()=>{
    if(crearGasto) {
      //agrega el nuevo presupuesto
      setGastos([...gastos,gasto])

      //resta del presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad
      setRestante(presupuestoRestante)

      setCrearGasto(false)
    }
    //eslint-disable-next-line
  },[gasto])

  //Cuando agreguemos un nuevo gasto
  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {mostrarpregunta ? (
            <Pregunta
              setPresupuesto={setPresupuesto}
              setRestante={setRestante}
              setMostrarPregunta={setMostrarPregunta}
            />
          ):
          (
            <div className="row">
              <div className="one-half column">
                <Formulario
                  setGasto={setGasto}
                  setCrearGasto={setCrearGasto}
                  restante={restante}
                />
              </div>
              <div className="one-half column">
                <Listado
                  gastos={gastos}
                />
                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
            </div>
          )}
        </div>
      </header>
      
    </div>
  );
}

export default App;
