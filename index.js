const express = require('express');

const {router} = require("./Route/user");

const {routerUser} = require("./Route/ngo")

const app = express()

const port = 3008

app.use('/user',router);

app.use("/ngo",routerUser);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



