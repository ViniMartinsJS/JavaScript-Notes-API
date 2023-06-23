const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb://127.0.0.1/javascriptNote", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("conexão bem-sucedida"))
  .catch((err) => console.log(err));
