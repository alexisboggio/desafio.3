const app = require('./app');

const PORT = process.env.port || 3005

app.listen(PORT,() => console.info(`Server up and running in port: ${PORT}`))