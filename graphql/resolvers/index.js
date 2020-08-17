import postResolvers from './post'
import userResolvers from './user'

const resolvers = {
  Query: {
    ...postResolvers.Query,
  },
}

export default resolvers
