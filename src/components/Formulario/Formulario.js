import "./Formulario.css"
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones";
import Boton from "../boton/boton";

const Formulario = () => {
  return <section className="formulario">
    <form>
      <h2>Rellena el formulario para crear el colaborador.</h2>
      <CampoTexto titulo='Nombre' placeholder='Ingresar nombre'/>
      <CampoTexto titulo='Puesto' placeholder='Ingresar puesto'/>
      <CampoTexto titulo='Foto' placeholder='Ingresar enlace de foto'/>
      <ListaOpciones />
      <Boton>Crear</Boton>
    </form>
  </section>
}

export default Formulario;