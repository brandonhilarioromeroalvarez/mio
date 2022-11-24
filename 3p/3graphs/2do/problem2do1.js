//Brandon Hilario Romero Alvarez
//Azerina Jandee Marin Olivo
//Hugo Alejandro Vuelvas Flores

//Grafo no Dirigido
import {Graph} from '../../../bhra/graph/graphs.js'

let g = new Graph(6)
g.addEdge(0,4)
g.addEdge(1,2)
g.addEdge(0,3)
g.addEdge(0,5)
g.addEdge(1,3)
g.addEdge(3,4)
g.addEdge(2,3)
g.addEdge(5,2)
g.addEdge(0,1)
g.addEdge(5,4)
g.showGraph()
console.log("Cuadrada: " + g.isSquare())
console.log("Simetrica: " + g.isSymetrical())