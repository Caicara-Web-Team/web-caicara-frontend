'use client';
import { products } from "@/utils/products";
import { Card, Carousel, Rate } from "antd";

export default function CarrousselHome() {
  return (
    <Carousel autoplay>
      {products.products.peixes.map((fish) => (
        <Card
          key={fish.title}
          
        >
          <div style={{ width:"10vw" }}>
            <h3>{fish.title}</h3>
            <p>{fish.shortDescription}</p>
            <p>Preço: {fish.price}</p>
            <p>Avaliações: {fish.reviews} reviews, Avaliação: <Rate value={fish.rate} /></p>
          </div>
        </Card>
      ))}
    </Carousel>
  )
}
