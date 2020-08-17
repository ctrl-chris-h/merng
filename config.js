import{config} from 'dotenv'
config()
export const MONGODB = process.env.ATLAS_URI
