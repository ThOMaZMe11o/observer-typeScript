import Observado from "./observado";
import Observador from "./observador";

let observado = new Observado('observado')

let observador1 = new Observador('observador 1')
let observador2 = new Observador('observador 2')
let observador3 = new Observador('observador 3')
let observador4 = new Observador('observador 4')

observado.incluirAssinante(observador1)
observado.incluirAssinante(observador2)
observado.incluirAssinante(observador3)
observado.incluirAssinante(observador4)

observado.inserirDados = ['dado 1',' dado 2']

observado.excluirAssinante(observador4)

observado.inserirDados = ['dados novos']