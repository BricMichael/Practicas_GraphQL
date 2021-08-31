import { GraphQLServer } from 'graphql-yoga';
import { resolvers } from './resolvers';
import { typeDefs } from './typeDefs';
import './models/database';


const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start({port: 4000}, ({port}) => console.log('server is running', port)
)