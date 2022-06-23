// //states
// app.get("/states/", async (req, res) => {
//   try {
//     let obj = req.query;
//     let key = Object.keys(obj)[0];
//     let value = Object.values(obj)[0];
//     let search = "";
//     search = `states.${key}`;
//     const data = await model.find({ [search]: value }, { "states.$": 1 });

//     res.send(data);
//   } catch (error) {
//     console.log(error);
//   }
// });
