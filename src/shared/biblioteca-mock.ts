import { Biblioteca } from "./models/biblioteca";

export const PrestamoLibrosMock: Biblioteca []=[
    {
      titulo: "Código Limpio",
      autor: "Robert C. martin",
      copiasDisponibles: 5,
      categoria: "informatica"
    },
  {
    titulo: "Code Complete",
    autor: "Steve McConnel",
    copiasDisponibles: 10,
    categoria: "informatica"
  },
  {
    titulo: "Ser Mortal",
    autor: "Atul Gawande",
    copiasDisponibles: 60,
    categoria: "Medicina"
  },
  {
    titulo: "Física Unbiversitaria",
    autor: "Hugh Young",
    copiasDisponibles: 100,
    categoria: "Ciencias Exactas"
  },

];