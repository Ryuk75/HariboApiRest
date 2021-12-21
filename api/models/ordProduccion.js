const {Schema, model} = require('mongoose');

const ordProduccionSchema = new Schema({
    item: {
        type: Number,
        required: [true, 'El numero de orden es obligatorio']
    },
    iD: {
        type: String,
        max: [100, 'La longuitud del campo supera la permitido(100) '],
    },
    name: {
        type: String,
        max: [100, 'La longuitud del campo supera la permitido(100) '],
        required: [true, 'El nombre del producto es obligatorio ']
    },
    cantReq: {
        type: Number,
        required: [true, 'La cantidad es obligatoria.']
    },
    unity: {
        type: String,
        required: [true, 'La unidad de medida es obligatoria']
    },
    status: {
        type: Boolean,
        required: [true, 'El estado es obligatorio ']
    }
},
{
    collection: 'ordProduccion'
});

exports.ordProduccion = model('ordProduccion', ordProduccionSchema);