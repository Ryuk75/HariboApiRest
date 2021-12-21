const {Schema, model} = require('mongoose');

const modProduccionSchema = new Schema({
    id_order: {
        type: Number,
        required: [true, 'El numero de orden es obligatorio']
    },
    description: {
        type: String,
        max: [100, 'La longuitud del campo supera la permitido(100) '],
    },
    status: {
        type: Boolean,
        required: [true, 'El estado de la produccion es obligatorio ']
    },
    production_date: {
        type: Date,
        required: [true, 'La fecha es obligatoria.']
    },
    actions: {
        type: String
    },
    dispatched: {
        type: Boolean,
        required: [true, 'El estado de despachado es obligatorio ']
    }
},
{
    collection: 'Produccion'
});

exports.modProduccion = model('Produccion', modProduccionSchema);