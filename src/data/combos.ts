import { Produto } from "./produtos";

export const combos: Produto[] = [
  {
    id: 1,
    nome: "Combo Camiseta + Calça",
    marca: "Marca X",
    imagem: "/produtos/combos/camiseta-calca.jpg",
    logoMarca: "/marcas/marca-x-logo.png",
    categoria: "combos", // Categoria de combo
    linkShopee: "https://shopee.com.br/produto-combo-camiseta-calca",
  },
  {
    id: 2,
    nome: "Combo T-Shirt + Bermuda",
    marca: "Marca Y",
    imagem: "/produtos/combos/tshirt-bermuda.jpg",
    logoMarca: "/marcas/marca-y-logo.png",
    categoria: "combos", // Categoria de combo
    linkShopee: "https://shopee.com.br/produto-combo-tshirt-bermuda",
  },
  // Adicione outros combos conforme necessário
];
