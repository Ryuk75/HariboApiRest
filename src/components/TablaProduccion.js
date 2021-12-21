import React from 'react';
import { Link, Route } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import Constant from './constant';
class TablaProduccion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eliminado: false,
        };
        this.redireccionarParaEditar = this.redireccionarParaEditar.bind(this);
        this.eliminar = this.eliminar.bind(this);
    }
    redireccionarParaEditar() {
        return <Route to={`/produccion/editar/${this.props.produccion._id}`} />
    }
    async eliminar() {
        const resultado = await Swal.fire({
            title: 'Confirmación',
            text: `¿Eliminar "${this.props.produccion.id_order}"?`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3298dc',
            cancelButtonColor: '#f14668',
            cancelButtonText: 'No',
            confirmButtonText: 'Sí, eliminar'
        });
        // Si no confirma, detenemos la función
        if (!resultado.value) {
            return;
        }
        const respuesta = await fetch(`${Constant.RUTA_API}/${this.props.produccion._id}`, {
            method: "DELETE",
        });
        const exitoso = await respuesta.json();
        if (exitoso) {
            toast('Produccion eliminada ', {
                position: "top-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            this.setState({
                eliminado: true,
            });
        } else {
            toast.error("Error eliminando. Intenta de nuevo");
        }
    }
    render() {
        if (this.state.eliminado) {
            return null;
        }
        return (
            <tr>
                <td>{this.props.produccion.id_order}</td>
                <td>{this.props.produccion.description}</td>
                <td>{this.props.produccion.status}</td>
                <td>{this.props.produccion.production_date}</td>
                <td>
                    <Link to={`/produccion/editar/${this.props.produccion._id}`} className="button is-info">Editar</Link>
                    <button onClick={this.eliminar} className="button is-danger">Eliminar</button>
                </td>
                <td>{this.props.produccion.dispatched}</td>
            </tr>
        );
    }
}

export default TablaProduccion;