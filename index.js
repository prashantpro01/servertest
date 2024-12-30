const express = require('express')
const app = express()
const port = process.env.port||3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/test',(req,res)=>{
    res.send('hi')
})

app.get('/jokes',(req,res)=>{
    const jokes=[
        {
          "id": "1",
          "joke": "Did you hear the one about the guy with the broken hearing aid? Neither did he.",
          "category": "Dad Jokes"
        },
        {
          "id": "2",
          "joke": "What do you call a fly without wings? A walk.",
          "category": "Dad Jokes"
        },
        {
          "id": "3",
          "joke": "Chuck Norris once had a dandruff problem, we call the product cocaine.",
          "category": "Chuck Norris Facts"
        },
        {
          "id": "4",
          "joke": "Why did the React class component feel relieved? Because it was now off the hook.",
          "category": "Developer Jokes"
        },];
        res.json(jokes);

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})