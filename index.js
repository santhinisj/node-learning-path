const express = require("express");
const app = express(); //create an express app and store it in a variable called app

const port = process.env.PORT || 8888; //set the port to 8888
app.get("/", (req, res) => {
  res.status(200).send("Hello World!"); //send a response to the client
  //   res.send("Hello World"); //send a response to the client
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
