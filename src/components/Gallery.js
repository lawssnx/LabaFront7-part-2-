import React from 'react';
import GoodsCard from './GoodsCard';

const Gallery = () => {
  const products = [
    {
      id: 1,
      name: 'Sony WH-1000XM5',
      price: 348,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl5B2r0HYR9GSX1vODy6yEIKZbF605KHzvH2AYXY2mv_AgOcP6sK0Zps3SGV5Ajum_OiM&usqp=CAU'
    },
    {
      id: 2,
      name: 'Apple iPhone 15',
      price: 999,
      image: 'https://openshop.fra1.cdn.digitaloceanspaces.com/public/uploads/products/photos/202405/9Gg3Q3FkqFioKXxqEIORdn0nwugcGx56V7tue9kn.jpg'
    },
    {
      id: 3,
      name: 'Samsung Galaxy S23',
      price: 799,
      image: 'https://media.wired.com/photos/63ee8e4fcde6e0e4f71293ef/master/pass/Samsung-Galaxy-S23-SOURCE-Samsung.jpg'
    },
    {
      id: 4,
      name: 'Bose QuietComfort 45',
      price: 329,
      image: 'https://blog.mta.ua/assets/images/cache/assets/images/2023/serpen/bose-quiet-comfort-45/i7xipeppszqatcmoqfbbwc-600x400.jpg'
    },
    {
      id: 5,
      name: 'Dell XPS 13',
      price: 1199,
      image: 'https://images.prom.ua/5386849635_w640_h320_noutbuk-dell-xps.jpg'
    },
    {
      id: 6,
      name: 'Logitech MX Master 3S',
      price: 99,
      image: 'https://elmir.ua/uploads/imgs/620/21620.jpg'
    }
  ];

  return (
    <div className="gallery">
      {products.map((product) => (
        <GoodsCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Gallery;
