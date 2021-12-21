import React from 'react';
import Constant from "./constant";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
class AgregarProduccion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            produccion: {
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
    render() {
        return (
            <div className="column is-one-third">
                <h1 className="is-size-3">Agregar nueva orden de Produccion</h1>
                <ToastContainer></ToastContainer>
                <form className="field" onSubmit={this.manejarEnvioDeFormulario}>
                    <div className="form-group">
                        <label className="label" htmlFor="nombre">Item:</label>
                        <input autoFocus required placeholder="Nombre" type="text" id="nombre" onChange={this.manejarCambio} value={this.state.produccion.nombre} className="input" />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="precio">ID:</label>
                        <input required placeholder="Precio" type="number" id="precio" onChange={this.manejarCambio} value={this.state.produccion.precio} className="input" />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="calificacion">Calificación:</label>
                        <input required placeholder="Calificación" type="number" id="calificacion" onChange={this.manejarCambio} value={this.state.produccion.calificacion} className="input" />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="calificacion">Calificación:</label>
                        <input required placeholder="Calificación" type="number" id="calificacion" onChange={this.manejarCambio} value={this.state.produccion.calificacion} className="input" />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="calificacion">Calificación:</label>
                        <input required placeholder="Calificación" type="number" id="calificacion" onChange={this.manejarCambio} value={this.state.produccion.calificacion} className="input" />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="calificacion">Calificación:</label>
                        <input required placeholder="Calificación" type="number" id="calificacion" onChange={this.manejarCambio} value={this.state.produccion.calificacion} className="input" />
                    </div>
                    <div className="form-group">
                        <button className="button is-success mt-2">Guardar</button>
                        &nbsp;
                        <Link to="/produccion/ver" className="button is-primary mt-2">Volver</Link>
                    </div>
                </form>
            </div>
        );
    }
    async manejarEnvioDeFormulario(evento) {

        evento.preventDefault();
        // Codificar nuestro videojuego como JSON

        const cargaUtil = JSON.stringify(this.state.produccion);
        // ¡Y enviarlo!
        const respuesta = await fetch(`${Constant.RUTA_API}`, {
            method: "POST",
            body: cargaUtil,
            headers: {
                "Content-Type":"application/json",
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
            this.setState({
                produccion: {
                    id_order: 0,
                    description: "",
                    status: true,
                    production_date: "",
                    actions: "",
                    dispatched: true,
                }
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
            const produccionActualizada = state.produccion;
            if (clave !== "id_order") {
                valor = parseFloat(valor);
            }
            // Actualizamos el valor de la produccion, solo en el campo que se haya cambiado
            produccionActualizada[clave] = valor;
            return {
                produccion: produccionActualizada,
            }
        });
    }
}

export default AgregarProduccion;