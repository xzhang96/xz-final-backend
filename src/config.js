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
  // db: {
  //   database: process.env.DB_NAME || 'heroku_cd3d6d1c747a95c',
  //   user: process.env.DB_USER || 'b1703ff315c6e9',
  //   password: process.env.DB_PASS || '24d55d92',
  //   options: {
  //     dialect: process.env.DIALECT || 'mysql',
  //     host: process.env.HOST || 'us-cdbr-east-02.cleardb.com',
  //   }
  // },
  authentication : {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}