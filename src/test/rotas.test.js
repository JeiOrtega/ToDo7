const request = require("supertest")

const app = require("../index")
const Calculadora = require("../model/Calculadora")

beforeAll(async()=> console.log("iniciando test"))


describe("iniciando test", ()=>{
    test("Sesion de rutas de test" , async()=> {
        const text = "rota de test"
        const resposta = await request(app).get("/")
        //expect(resposta.statusCode).toBe(200)
        expect(resposta.body.text).toBe(text)
})
})

test("Testando operaciones de resta", async ()=>{
    const resta = await Calculadora.resta(3,1)
    expect (resta).toEqual(2)
})

test("testeando con resta con error", async ()=>{
    try {
        const resta = await Calculadora.resta(2, "x")
    }
    catch (erro){
        expect (erro).toBeTruthy()
    }
})

test("Testando operaciones de division", async ()=>{
    const division = await Calculadora.division(3,1)
    expect (division).toEqual(3)
})

test("testeando con division con error", async ()=>{
    try {
        const division = await Calculadora.division(2, "a")
    }
    catch (erro){
        expect (erro).toBeTruthy()
    }
})

test("Testando operaciones de multiplicacion", async ()=>{
    const multiplicacion = await Calculadora.multiplicacion(3,1)
    expect (multiplicacion).toEqual(3)
})

test("testeando con multiplicacion con error", async ()=>{
    try {
        const multiplicacion = await Calculadora.multiplicacion(2,"x")
    }
    catch (erro){
        expect (erro).toBeTruthy()
    }
})

test("Testando operaciones de suma", async ()=>{
    const suma = await Calculadora.suma(3,1)
    expect (suma).toEqual(4)
})

test("testeando con suma con error", async ()=>{
    try {
        const suma = await Calculadora.suma(2, "a")
    }
    catch (erro){
        expect (erro).toBeTruthy()
    }
})