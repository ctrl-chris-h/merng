import { ApolloServer } from 'apollo-server'
import mongoose from 'mongoose'

import typeDefs from './graphql/typeDefs'
import { MONGODB } from './config'
import resolvers from './graphql/resolvers'

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

console.log({MONGODB})

mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log('MongoDB Connected')
    return server.listen({ port: 5000 })
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`)
  })
