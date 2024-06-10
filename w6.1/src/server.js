import express from 'express';  
const app = express();

app.use(express.json());


app.get("/todos", (req, res) => {
  res.json([
    { id: 1, title: "Todo 1", discription: "Description 1" },
    { id: 2, title: "Todo 2", discription: "Description 2" },
    { id: 3, title: "Todo 3", discription: "Description 3" },
  ]);
});
app.listen(3000); 
