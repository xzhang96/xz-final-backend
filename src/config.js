module.exports = {
  db: {
    database: process.env.DB_NAME || 'RecipeApp',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'zxy19960831',
    options: {
      dialect: process.env.DIALECT || 'mysql',
      host: process.env.HOST || 'localhost',
      port: process.env.DB_PORT || '3306'
    }
  },
  authentication : {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}