import express, { Application, Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const app: Application = express()
const prisma = new PrismaClient()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port: number = 3000

app.get("/", (_req, res: Response) => {
  res.send(`Server is running on port: ${port}`)
})

app.post("/api/v1/save", async (req: Request, res: Response) => {
  try {
    const allUsers = await prisma.user.findMany()
    req.body.forEach(async (element: any) => {
      const newUser = await prisma.user.create({
        data: {
          id: element.id,
          name: element.name,
          company: element.company.name,
          email: element.email,
          phone: element.phone,
        },
      })
      return res.json({
        success: true,
        data: newUser,
      })
    })
  } catch (error) {
    return res.json({
      success: false,
      message: error,
    })
  }
})

app.get("/api/v1/fetch", async (req: Request, res: Response) => {
  try {
    const allUsers = await prisma.user.findMany()
    return res.json({
      success: true,
      data: allUsers
    })
  } catch (error) {
    return res.json({
      success: false,
      message: error
    })
  }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
