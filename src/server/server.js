var express = require('express')
import routes from './routes/routes'

const app = express();

app.use('/api', routes);

const server = app.listen(3010, () => {
    const {address, port} = server.address();


})