const Calculadora = require("../model/Calculadora");

class CalculadoraController {
  static async suma(req, res) {
    try {
      const query = req.query;
      console.log("query: ", query);
      const values = Object.values(query);
      console.log("values: ", values);
      const converteNumero = values.map((numero) => {
        return Number(numero);
      });
      console.log("conversao: ", converteNumero);
      const suma = await Calculadora.suma(...converteNumero);
      res.status(200).json({
        resultado: suma,
        erro: false,
      });
    } catch (erro) {
      if (erro) {
        res.status(400).json({ mensamgem: "", erro: true });
      }

    }

  }
   static async resta(req, res) {
    try {
      const query = req.query;
      console.log("query: ", query);
      const values = Object.values(query);
      console.log("values: ", values);
      const converteNumero = values.map((numero) => {
        return Number(numero);
      });
      console.log("conversao: ", converteNumero);
      const resta = await Calculadora.resta(...converteNumero);
      res.status(200).json({
        resultado: resta,
        erro: false,
      });
    } catch (erro) {
      if (erro) {
        res.status(400).json({ mensamgem: "", erro: true });
      }

    }

   }

   static async multiplicacion(req, res) {
    try {
      const query = req.query;
      console.log("query: ", query);
      const values = Object.values(query);
      console.log("values: ", values);
      const converteNumero = values.map((numero) => {
        return Number(numero);
      });
      console.log("conversao: ", converteNumero);
      const multiplicacion = await Calculadora.multiplicacion(...converteNumero);
      res.status(200).json({
        resultado: multiplicacion,
        erro: false,
      });
    } catch (erro) {
      if (erro) {
        res.status(400).json({ mensamgem: "", erro: true });
      }

    }

   }

    static async division(req, res) {
    try {
      const query = req.query;
      console.log("query: ", query);
      const values = Object.values(query);
      console.log("values: ", values);
      const converteNumero = values.map((numero) => {
        return Number(numero);
      });
      console.log("conversao: ", converteNumero);
      const division = await Calculadora.division(...converteNumero);
      res.status(200).json({
        resultado: division,
        erro: false,
      });
    } catch (erro) {
      if (erro) {
        res.status(400).json({ mensamgem: "", erro: true });
      }

    }

   }

}

module.exports = CalculadoraController;
