type Produto = {
    id: number;
    nome: string;
    imagem: string;
    preco: string;
    linkShopee: string;
  };
  
  const produtos: Produto[] = [
    {
      id: 1,
      nome: "Camisa Masculina Algodão",
      imagem: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m8bzs002kqohed@resize_w450_nl.webp",
      preco: "R$ 25,90",
      linkShopee: "https://shopee.com.br/product/1398643135/22093889907/",
    },
    {
      id: 2,
      nome: "Kit com 4 Camisetas Masculinas",
      imagem: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m8bzs002oyr5de.webp",
      preco: "R$ 99,90",
      linkShopee: "https://shopee.com.br/product/1398643135/20198106232/",
    },
    
    // Adicione mais produtos aqui
  ];
  
  const Produtos = () => {
    return (
      <section className="py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Nossos Produtos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {produtos.map((produto) => (
            <div key={produto.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={produto.imagem} alt={produto.nome} className="w-full h-60 object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">{produto.nome}</h3>
                <p className="text-gray-600 mb-2">{produto.preco}</p>
                <a
                  href={produto.linkShopee}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Ver na Shopee
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Produtos;
  