const express = require('express')
const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.status(200).json({
        sucess: true,
        data: "Yay! Connect successfully!"
    })
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})