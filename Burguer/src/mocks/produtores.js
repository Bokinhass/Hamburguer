import green from '../assets/produtores/green.png';
import salad from '../assets/produtores/salad.png';
import jennyJack from '../assets/produtores/jenny-jack.png';
import grow from '../assets/produtores/grow.png';
import potager from '../assets/produtores/potager.png';

import tomate from '../assets/verduras/Tomate.png';
import brocolis from '../assets/verduras/Brócolis.png';
import batata from '../assets/verduras/Batata.png';


const gerarNumeroAleatorio = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const produtores = {
  lista: [
    {
      nome: "Green",
      imagem: green,
      distancia: gerarNumeroAleatorio(30, 120),
      estrelas: gerarNumeroAleatorio(3, 5),
      cestas: [
        {
          detalhes: {
            nome: "Green",
            descricao: "Um lanche feito no capricho",
            preco: "R$ 30,00",
            imagem: green
          },
          itens: [
            {
              nome: "Green",
              imagem: green,
            },
          ]
        },
        {
          detalhes: {
            nome: "Combo",
            descricao: "Combo com Batata e Onion's Rings",
            preco: "R$ 45,00",

            imagem: tomate
          },
          itens: [
            {
              nome: "Batata Frita",
              imagem: batata,
            },
            {
              nome: "Onion's Rings",
              imagem: brocolis,
            },
          ]
        }
      ]
    },
    {
      nome: "Salad",
      imagem: salad,
      distancia: gerarNumeroAleatorio(30, 120),
      estrelas: gerarNumeroAleatorio(3, 5),
      cestas: [
        {
          detalhes: {
            nome: "Salad",
            descricao: "Um lanche feito no capricho",
            preco: "R$ 25,00",

            imagem: salad
          },
          itens: [
            {
              nome: "Salad",
              imagem: salad,
            },
          ]
        },
        {
          detalhes: {
            nome: "Combo",
            descricao: "Combo com Batata e Onion's Rings",
            preco: "R$ 40,00",

            imagem: tomate
          },
          itens: [
            {
              nome: "Batata Frita",
              imagem: batata,
            },
            {
              nome: "Onion's Rings",
              imagem: brocolis,
            },
          ]
        }
      ]
    },
    {
      nome: "Jenny Jack Farm",
      imagem: jennyJack,
      distancia: gerarNumeroAleatorio(30, 120),
      estrelas: gerarNumeroAleatorio(3, 5),
      cestas: [
        {
          detalhes: {
            nome: "Jenny Jack Farm",
            descricao: "Um lanche feito no capricho",
            preco: "R$ 35,00",

            imagem: jennyJack
          },
          itens: [
            {
              nome: "Jenny Jack Farm",
              imagem: jennyJack,
            },
          ]
        },
        {
          detalhes: {
            nome: "Combo",
            descricao: "Combo com Batata e Onion's Rings",
            preco: "R$ 50,00",

            imagem: tomate
          },
          itens: [
            {
              nome: "Batata Frita",
              imagem: batata,
            },
            {
              nome: "Onion's Rings",
              imagem: brocolis,
            },
          ]
        }
      ]
    },
    {
      nome: "Grow",
      imagem: grow,
      distancia: gerarNumeroAleatorio(30, 120),
      estrelas: gerarNumeroAleatorio(3, 5),
      cestas: [
        {
          detalhes: {
            nome: "Grow",
            descricao: "Um lanche feito no capricho",
            preco: "R$ 27,00",

            imagem: grow
          },
          itens: [
            {
              nome: "Grow",
              imagem: grow,
            },
          ]
        },
        {
          detalhes: {
            nome: "Combo",
            descricao: "Combo com Batata e Onion's Rings",
            preco: "R$ 42,00",

            imagem: tomate
          },
          itens: [
            {
              nome: "Batata Frita",
              imagem: batata,
            },
            {
              nome: "Onion's Rings",
              imagem: brocolis,
            },
          ]
        }
      ]
    },
    {
      nome: "Potager",
      imagem: potager,
      distancia: gerarNumeroAleatorio(30, 120),
      estrelas: gerarNumeroAleatorio(3, 5),
      cestas: [
        {
          detalhes: {
            nome: "Potager",
            descricao: "Um lanche feito no capricho",
            preco: "R$ 42,00",

            imagem: potager
          },
          itens: [
            {
              nome: "Potager",
              imagem: potager,
            },
          ]
        },
        {
          detalhes: {
            nome: "Combo",
            descricao: "Combo com Batata e Onion's Rings",
            preco: "R$ 57,00",

            imagem: tomate
          },
          itens: [
            {
              nome: "Batata Frita",
              imagem: batata,
            },
            {
              nome: "Onion's Rings",
              imagem: brocolis,
            },
          ]
        }
      ]
    }
  ]
};

export default produtores;
