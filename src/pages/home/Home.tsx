import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

interface Produto {
  id: number;
  nome: string;
  marca: string;
  imagem: string;
  logoMarca: string;
}

const produtos: Produto[] = [
  // IDs 1 ao 6 - Camisetas
  {
    id: 1,
    nome: 'Camiseta Nike',
    marca: 'Nike',
    imagem: '/produtos/camisetas/nike.jpg',
    logoMarca: '/marcas/nike-logo.png',
  },
  {
    id: 2,
    nome: 'Camiseta Adidas',
    marca: 'Adidas',
    imagem: '/produtos/camisetas/adidas.jpg',
    logoMarca: '/marcas/adidas-logo.png',
  },
  {
    id: 3,
    nome: 'Camiseta Lacoste',
    marca: 'Lacoste',
    imagem: '/produtos/camisetas/lacoste.jpg',
    logoMarca: '/marcas/lacoste-logo.png',
  },
  {
    id: 4,
    nome: 'Camiseta Oakley',
    marca: 'Oakley',
    imagem: '/produtos/camisetas/oakley.jpg',
    logoMarca: '/marcas/oakley-logo.png',
  },
  {
    id: 5,
    nome: 'Camiseta Hugo Boss',
    marca: 'Hugo Boss',
    imagem: '/produtos/camisetas/hugo.jpg',
    logoMarca: '/marcas/hugo-logo.png',
  },
  {
    id: 6,
    nome: 'Camiseta Calvin Klein',
    marca: 'Calvin Klein',
    imagem: '/produtos/camisetas/ck.jpg',
    logoMarca: '/marcas/ck-logo.png',
  },

  // IDs 7 ao 10 - Moletons / Blusas
  {
    id: 7,
    nome: 'Moletom Feminina Hugo Boss',
    marca: 'Hugo Boss',
    imagem: '/produtos/blusas/hugo.jpeg',
    logoMarca: '/marcas/hugo-logo.png',
  },
  {
    id: 8,
    nome: 'Moletom Feminina Nike',
    marca: 'Nike',
    imagem: '/produtos/blusas/nike.jpeg',
    logoMarca: '/marcas/nike-logo.png',
  },
  {
    id: 9,
    nome: 'Moletom Feminina Adidas',
    marca: 'Adidas',
    imagem: '/produtos/blusas/adidas.jpeg',
    logoMarca: '/marcas/adidas-logo.png',
  },
  {
    id: 10,
    nome: 'Moletom Feminina Nike Air Jordan',
    marca: 'Nike',
    imagem: '/produtos/blusas/nike1.jpeg',
    logoMarca: '/marcas/nike-logo.png',
  },

  // IDs 11 ao 13 - Calças
  {
    id: 11,
    nome: 'Calça Masculino Moletom Lacoste',
    marca: 'Lacoste',
    imagem: '/produtos/calça/lacoste.jpeg',
    logoMarca: '/marcas/lacoste-logo.png',
  },
  {
    id: 12,
    nome: 'Calça Masculino Moletom Nike Nocta',
    marca: 'Nike',
    imagem: '/produtos/calça/nike.jpeg',
    logoMarca: '/marcas/nike-logo.png',
  },
  {
    id: 13,
    nome: 'Calça Masculino Moletom Quiksilver',
    marca: 'Quiksilver',
    imagem: '/produtos/calça/quik.jpeg',
    logoMarca: '/marcas/quiksilver-logo.png',
  },
];

const Home = () => {
  const camisetas = produtos.filter(p => p.imagem.includes('/camisetas/'));
  const moletons = produtos.filter(p => p.imagem.includes('/blusas/') || p.imagem.includes('/blusa/'));
  const calcas = produtos.filter(p => p.imagem.includes('/calça/'));

  // Função lambda com tipo Produto aplicado
  const renderProdutoSlide = (produto: Produto) => (
    <SwiperSlide key={produto.id}>
      <div className="border rounded-xl p-4 shadow-md bg-white max-w-sm mx-auto">
        <div className="w-full aspect-[3/4] overflow-hidden rounded-lg mb-2 bg-gray-100">
          <img
            src={produto.imagem}
            alt={produto.nome}
            className="object-cover w-full h-full"
          />
        </div>
        <h3 className="text-lg font-medium">{produto.nome}</h3>
        <img
          src={produto.logoMarca}
          alt={produto.marca}
          className="h-8 mx-auto mt-2"
        />
      </div>
    </SwiperSlide>
  );

  return (
    <section className="py-12 px-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Bem-vindo à Mega Santorini</h1>
      <p className="text-gray-700 text-lg max-w-xl mx-auto mb-8">
        Aqui você encontra camisetas e produtos estilosos para todos os gostos.
        Confira nossa vitrine e entre em contato para comprar via Shopee ou Whatsapp.
      </p>

      {/* Marcas */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Trabalhamos com grandes marcas</h2>
        <div className="flex justify-center gap-6 flex-wrap">
          {['Nike', 'Lacoste', 'Oakley', 'Adidas', 'Hugo', 'Ck', 'Quiksilver'].map((marca, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded shadow-md flex items-center justify-center"
              style={{ width: '120px', height: '80px' }}
            >
              <img
                src={`/marcas/${marca.toLowerCase().replace(/ /g, '-')}-logo.png`}
                alt={marca}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Carrossel Camisetas */}
      <div className="mb-12 max-w-5xl mx-auto whitespace-nowrap">
        <h2 className="text-2xl font-semibold mb-4">Camisetas</h2>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {camisetas.map(renderProdutoSlide)}
        </Swiper>
      </div>

      {/* Carrossel Moletons */}
      <div className="mb-12 max-w-5xl mx-auto whitespace-nowrap">
        <h2 className="text-2xl font-semibold mb-4 ">Moletom Feminina</h2>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {moletons.map(renderProdutoSlide)}
        </Swiper>
      </div>

      {/* Carrossel Calças */}
      <div className="mb-12 max-w-5xl mx-auto whitespace-nowrap">
        <h2 className="text-2xl font-semibold mb-4">Calça Moletom Masculino</h2>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {calcas.map(renderProdutoSlide)}
        </Swiper>
      </div>
    </section>
  );
};

export default Home;
