const env = typeof window === 'undefined' ? process.env : {}

const base_url = env.BASE_URL || 'https://orthocal.info'
const port = env.PORT || 8000

export {base_url, port}
