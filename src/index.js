const { Router } = require("express")
const express = require ("express")
const app = express()

app.use(express.json())

const router = Router()

router.get("/").send("rota de test")

router.get("/suma")

router.get("/resta")

router.get("/multiplicaion")

router.get("/division")

app.listen(3300,()=>console.log("servidor rodando"))

