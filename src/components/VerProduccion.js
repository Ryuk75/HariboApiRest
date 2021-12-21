import React from 'react';
import Constant from "./constant";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TablaDeProduccion from './TablaProduccion';
class VerProduccion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            produccion: [],
        };
    }
    async componentDidMount() {
        const respuesta = await fetch(`${Constant.RUTA_API}`);
        const Produccion = await respuesta.json();
        this.setState({
            produccion: Produccion,
        });
    }
    render() {
        return (
            <div>
                <div className="column">
                    <h1 className="is-size-3">Ver Produccion</h1>
                    <ToastContainer></ToastContainer>
                </div>
                <div className="table-container">
                    <table className="table is-fullwidth is-bordered">
                        <thead>
                            <tr>
                                <th># Orden</th>
                                <th>Descripcion</th>
                                <th>Status de Inventario</th>
                                <th>Fecha de Produccion</th>
                                <th>Editar</th>
                                <th>Eliminar</th>
                                <th>Despachado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.produccion.map(produccion => {
                                return <TablaDeProduccion key={produccion._id} produccion={produccion}></TablaDeProduccion>;
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default VerProduccion;