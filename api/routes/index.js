const modProduccion = require('./produccion');
const ordProduccion = require('./ordNuevaProduccion');

exports.registrarControladores = (app)=>{
    app.use('/modProduccion', modProduccion);
    app.use('ordProduccion', ordProduccion);
}