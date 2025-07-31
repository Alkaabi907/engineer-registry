const request = require("supertest")
const mongoose = require("mongoose")
const { MongoMemoryServer } = require("mongodb-memory-server")
const app = require("../app.js")
const Engineer = require("../models/engineer.js")

const server = app.listen(8081, () => {
  console.log("Testing engineer routes on port 8081")
})

let mongoServer

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create()
  await mongoose.connect(mongoServer.getUri())
})

afterAll(async () => {
  await mongoose.connection.close()
  await mongoServer.stop()
  server.close()
})

describe("Test the engineers endpoints", () => {
  test("It should create a new engineer", async () => {
    const response = await request(app).post("/engineers").send({
      name: "Alice Smith",
      specialty: "Software",
      yearsExperience: 5,
      available: true,
    })
    expect(response.statusCode).toBe(302) // redirect
    const engineers = await Engineer.find({})
    expect(engineers.length).toBe(1)
    expect(engineers[0].name).toBe("Alice Smith")
  })

  test('It should show the index page with engineers', async () => {
  await request(app).post('/engineers').send({
    name: 'Bob Johnson',
    specialty: 'Software',
    yearsExperience: 7,
    available: true
  })

  const response = await request(app).get('/engineers')
  console.log(response.text) // <---- add this to see the HTML or error message
  expect(response.statusCode).toBe(200)
  expect(response.text).toContain('Bob Johnson')
})

  test("It should update an engineer", async () => {
    const engineer = await Engineer.create({
      name: "Charlie Brown",
      specialty: "Electrical",
      yearsExperience: 3,
      available: true,
    })
    const response = await request(app)
      .put(`/engineers/${engineer._id}?_method=PUT`)
      .send({
        name: "Charlie Updated",
        specialty: "Electrical",
        yearsExperience: 4,
        available: "on",
      })
    expect(response.statusCode).toBe(302) // redirect
    const updated = await Engineer.findById(engineer._id)
    expect(updated.name).toBe("Charlie Updated")
    expect(updated.yearsExperience).toBe(4)
  })

  test("It should delete an engineer", async () => {
    const engineer = await Engineer.create({
      name: "Dana Williams",
      specialty: "Mechanical",
      yearsExperience: 8,
      available: true,
    })
    const response = await request(app)
      .delete(`/engineers/${engineer._id}?_method=DELETE`)
      .send()
    expect(response.statusCode).toBe(302) // redirect
    const deleted = await Engineer.findById(engineer._id)
    expect(deleted).toBeNull()
  })
})