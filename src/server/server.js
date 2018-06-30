var express = require('express')
import routes from './routes/routes'
import cors from 'cors';


const app = express();

app.use(cors())

app.use('/api', routes);

const server = app.listen(3010, () => {
    const { address, port } = server.address();
    console.log('Listening on --> http://localhost:' + port)

})