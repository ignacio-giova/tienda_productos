import React from 'react';
import ProductCard from './productCard';

// Datos de ejemplo. Los traemos de la base de datos.
const products = [
  {name: 'Camiseta de algodón', price: 25.99, imageUrl: 'https://marianaombu.com.ar/wp-content/uploads/2019/11/MG_1430-scaled.jpg', altText: 'Camiseta de algodón' },
  {name: 'Pantalón de mezclilla', price: 59.99, imageUrl: 'https://optimamayoreo.com.mx/wp-content/uploads/2023/08/OFFEO-offeo-video-233-1000x1000.png', altText: 'Pantalón de mezclilla' },
  {name: 'Zapatos deportivos', price: 89.99, imageUrl: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/dbb0fb9734d943719c397c4539669881_9366/Zapatillas_de_Running_Runfalcon_5_Azul_IE8809_HM1.jpg', altText: 'Zapatos deportivos' },
];

function ProductList() {
  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map(product => (
        <ProductCard
          key={product.name}
          product={product} 
        />
      ))}
    </div>
  );
}

export default ProductList;