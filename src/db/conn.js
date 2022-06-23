const mongoose = require("mongoose");
const uri =
  "mongodb+srv://ishaan:ishaan12345@cluster0.4apqysa.mongodb.net/worldmap?retryWrites=true&w=majority";
mongoose
  .connect(uri, {})
  .then(() => {
    console.log(`connection succesful`);
  })
  .catch((err) => console.log(err));
