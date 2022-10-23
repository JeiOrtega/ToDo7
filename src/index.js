const { Router } = require("express")
const express = require ("express")
const app = express()

app.use(express.json())

const router = Router()

router.get("/", (requet,resposta)=>{
    resposta.status(200).json({text:"rota de test"})
})

router.get("/suma")

router.get("/resta")

router.get("/multiplicaion")

router.get("/division")

app.use(router)

app.listen(3300,()=>console.log("servidor rodando"))

module.exports = app

