//Brandon Hilario Romero Alvarez
//Azerina Jandee Marin Olivo
//Hugo Alejandro Vuelvas Flores

//Arbol binario
import {BST} from '../../../bhra/tree/tree.js'

var nums = new BST()
nums.insert(43)
nums.insert(32)
nums.insert(8)
nums.insert(90)
nums.insert(12)
nums.insert(84)
nums.insert(65)
nums.insert(102)
nums.inOrder(nums.root)

nums.remove(56)
nums.inOrder(nums.root)
nums.find(10)
nums.find(32)