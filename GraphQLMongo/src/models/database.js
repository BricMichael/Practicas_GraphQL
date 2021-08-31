import mongoose from 'mongoose';

let url = 'mongodb://localhost/graphqltest';
// segundo parametro de la conexion, con esto evitamos errores en la consola. {useNewUrlParser:true,useUnifiedTopology: true }
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true })
    .then( (db) => console.log('Base de datos mongo encendida') )
    .catch( (err) => console.log(err) )