const request = require("supertest")

const app = require("../index")

beforeAll(async()=> console.log("iniciando test"))


describe("iniciando test", ()=>{
    test("Sesion de rutas de test" , async()=> {
        const text = "rota de test"
        const resposta = await request(app).get("/")
        //expect(resposta.statusCode).toBe(200)
        expect(resposta.body.text).toBe(text)
})
})
