const dataBooks = require('../data/libros');
const dataAutores = require('../data/autores');


const resolvers = {
    Query: {
        saludo() { 
            return 'Vertale maicol aprendiendo Graphql'
        },
        libros() {
            return dataBooks
        },
        autores() { return dataAutores }
    },
    Book: {
        id_author: ({id_author}) => {
          return dataAutores.find( a => a.id === id_author )    
        }
    },
    Autor: {
        libros: ({id}) => { // data de las propiedades de este tipo
            let resp = dataBooks.filter( b => b.id_author === id );

           let librosByUser  = resp.map( libro => libro.title)
            return librosByUser;
        }
    }
}

module.exports = resolvers;
// preguntar por un tipo de dato y resolver lo que devolvera una de sus propiedades