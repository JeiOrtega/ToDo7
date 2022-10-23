class Calculadora {
    static async suma(numero1, numero2) {
      return numero1 + numero2;
    }
    static async resta(numero1, numero2) {
        return numero1 - numero2;
    }
    static async multiplicacion(numero1, numero2) {
        return numero1 * numero2;
    }
    static async division(numero1, numero2) {
        return numero1 / numero2;
    } 
           
  }
  
  
  module.exports = Calculadora;