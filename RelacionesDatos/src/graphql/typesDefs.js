const typeDefs = `
    type Query {
        saludo: String!
        libros: [Book!]!
        autores: [Autor!]!
        resenias: [Resenia!]!
    }

    type Resenia {
        resenia: String!
        idBook: Book!
    }

    type Book {
        id: ID!
        title: String!
        id_author: Autor!
        review: Resenia!
    }

    type Autor {
        id: ID!
        name: String!
        libros: [String!]!
    }
`;


//cada propiedad del tipo recibe un parametro parent, que son todas las propiedades que tiene ese tipo
// ! => no puede ser undefined o null
// preguntar por un tipo de dato y resolver lo que devolvera una de sus propiedades













module.exports = typeDefs;