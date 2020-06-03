const mongoose = require('mongoose');
//Schema

let Schema = mongoose.Schema;

//coleccion

let pintoresSchema = new Schema({
    nombre:{
        type : String,
        require : [true, 'Requerimos el nombre']

    },
    estilo:{
        type : String,
        require : [true, 'Requerimos el estilo']
    },
    corriente:{
        type : String,
        require : [true, 'Requerimos la corriente']
    },
    nacionalidad:{
        type : String,
    },
    pintor:{
        type : String,
    }
});

module.exports = mongoose.model('Pintores', pintoresSchema);
