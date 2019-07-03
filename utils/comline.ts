import dotenv from 'dotenv'
import GhostContentAPI from '@tryghost/content-api'

dotenv.config()

const comline = new GhostContentAPI({
  url: process.env.GHOST_URL || 'https://demo.ghost.io',
  key: process.env.GHOST_API_KEY || '22444f78447824223cefc48062',
  version: process.env.ghost_API_VERSION || 'v2'
})

export default comline
