'use client';
import { useEffect, useState } from 'react';
import { Card } from "antd";
import Image from "next/image";


type Product = {
  imgLink: string;
  title: string;
  description: string;
  shortDescription: string;
  price: string;
  quantity: number;
  rate: number;
  reviews: number;
};

type ProductsContainer = {
  products: {
      peixes: Product[];
      moluscos: Product[];
      frutosDoMar: Product[];
  };
};

// Exemplo de como poderia ser estruturado products, agora explicitamente tipado
const products: ProductsContainer = {
  products: {
      peixes: [],
      moluscos: [],
      frutosDoMar: []
  }
};


function findProductByTitle(title: string | string[] | undefined, products: ProductsContainer): Product | null {
  if (typeof title !== 'string') return null;
  
  let result: Product | undefined;
  for (let category in products.products) {
      result = products.products[category as keyof typeof products.products].find(p => p.title === title);
      if (result) break;
  }
  
  return result || null;
}


export default function ProductPage({params,}:{params:{title:string}}) {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
      const fetchedProduct = findProductByTitle(params.title, products);
      setProduct(fetchedProduct);
  }, [params.title]);

  if (!product) {
      return <p>Carregando...</p>;
  }

  return (
      <div style={{ margin: "64px" }}>
          <Card>
              <Image src={product.imgLink} width={462} height={260} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.shortDescription}</p>
              <p>{product.description}</p>
              <p>Preço: {product.price}</p>
              <p>Quantidade: {product.quantity}</p>
              <p>Avaliações: {product.reviews} reviews, Avaliação: {product.rate} estrelas</p>
          </Card>
      </div>
  );
}