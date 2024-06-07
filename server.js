const mongoose = require("mongoose");

const app = require('./app')

mongoose
  .connect(
    "mongodb+srv://YuriiKniaz2:Yurakniaz2@test-app.hffl01j.mongodb.net/?retryWrites=true&w=majority&appName=Test-App",
    { dbName: "test-app" }
  )
  .then(() => {
    app.listen(3000);
    console.log("Database succefuly connected");
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
