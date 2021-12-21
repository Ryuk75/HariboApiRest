import React from 'react';
import Constant from "./constant";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link} from 'react-router-dom';
class EditarProduccion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            produccion: {
                _id: "",
                "id_order": 0,
                "description": "",
                "status": true,
                "production_date": "",
                "actions": "",
                "dispatched": true,
            },
        };
        // Indicarle a las funciones a quién nos referimos con "this"
        this.manejarCambio = this.manejarCambio.bind(this);
        this.manejarEnvioDeFormulario = this.manejarEnvioDeFormulario.bind(this);
    }
    async componentDidMount() {
        // Obtener ID de URL
        const idProduccion = this.props.match.params.id;
        // Llamar a la API para obtener los detalles
        const respuesta = await fetch(`${Constant.RUTA_API}/${idProduccion}`);
        const produccion = await respuesta.json();
        // "refrescar" el formulario
        this.setState({
            produccion: produccion,
        });
    }
    render() {
        return (
            <div className="column is-one-third">
                <h1 className="is-size-3">Editando Produccion</h1>
                <ToastContainer></ToastContainer>
                <form className="field" onSubmit={this.manejarEnvioDeFormulario}>
                    <div className="form-group">
                        <label className="label" htmlFor="nombre">Nombre:</label>
                        <input autoFocus required placeholder="Nombre" type="text" id="nombre" onChange={this.manejarCambio} value={this.state.produccion.nombre} className="input" />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="precio">Precio:</label>
                        <input required placeholder="Precio" type="number" id="precio" onChange={this.manejarCambio} value={this.state.produccion.precio} className="input" />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="calificacion">Calificación:</label>
                        <input required placeholder="Calificación" type="number" id="calificacion" onChange={this.manejarCambio} value={this.state.produccion.calificacion} className="input" />
                    </div>
                    <div className="form-group">
                        <button className="button is-success mt-2">Guardar</button>
                        &nbsp;
                        <Link to="/videojuegos/ver" className="button is-primary mt-2">Volver</Link>
                    </div>
                </form>
            </div>
        );
    }
    async manejarEnvioDeFormulario(evento) {

        evento.preventDefault();
        // Codificar nuestra produccion como JSON

        const cargaUtil = JSON.stringify(this.state.produccion);
        // ¡Y enviarlo!
        const respuesta = await fetch(`${Constant.RUTA_API}/`, {
            method: "PUT",
            body: cargaUtil,
            headers: {
                "Content-Type": "application/json",
            }
        });
        const exitoso = await respuesta.json();
        if (exitoso) {
            toast('Produccion guardada ', {
                position: "top-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

        } else {
            toast.error("Error guardando. Intenta de nuevo");
        }
    }
    manejarCambio(evento) {
        // Extraer la clave del estado que se va a actualizar, así como el valor
        const clave = evento.target.id;
        let valor = evento.target.value;
        this.setState(state => {
            const produccionActualizado = state.produccion;
            // Si es la calificación o el nombre, necesitamos castearlo a entero
            if (clave !== "nombre") {
                valor = parseFloat(valor);
            }
            // Actualizamos el valor de la produccion, solo en el campo que se haya cambiado
            produccionActualizado[clave] = valor;
            return {
                produccion: produccionActualizado,
            }
        });
    }
}

export default (EditarProduccion);