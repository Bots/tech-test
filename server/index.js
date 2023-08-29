import express from "express"
import cors from "cors"
import bodyParser from "body-parser"

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/api/v1/users", (req, res) => {
  const users = []

  return res.status(200).json({ users })
})

app.listen(5000, () => {
  console.log("App listening on port 5000!")
})
