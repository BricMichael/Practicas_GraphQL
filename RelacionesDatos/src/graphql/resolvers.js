const dataBooks = require('../data/libros');
const dataAutores = require('../data/autores');
const dataReviews = require('../data/reviews');


const resolvers = {
    Query: {
        saludo() { 
            return 'Vertale maicol aprendiendo Graphql'
        },
        libros() {
            return dataBooks
        },
        autores() { return dataAutores },
        resenias() { return dataReviews }
    },
    Book: {
        id_author: ({id_author}) => {
          return dataAutores.find( a => a.id === id_author )    
        },
        review: ({id} ) => {
            return dataReviews.find( f => f.idBook === id )
        }
    },
    Autor: {
        libros: ({id}) => { // data de las propiedades de este tipo
            let resp = dataBooks.filter( b => b.id_author === id );

            let librosByUser  = resp.map( libro => libro.title);
            return librosByUser;
        }
    },
    Resenia: {
        idBook: ({idBook}) => {
            return dataBooks.find( id => id.id === idBook );
        }
    }
}

module.exports = resolvers;
// preguntar por un tipo de dato y resolver lo que devolvera una de sus propiedades