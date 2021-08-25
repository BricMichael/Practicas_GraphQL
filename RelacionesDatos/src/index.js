const { GraphQLServer } = require('graphql-yoga');
const typeDefs = require('./graphql/typesDefs');
const resolvers = require('./graphql/resolvers');


const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start({port: 4500}, ({port}) => console.log('server is running', port) );