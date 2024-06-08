'use client';
import { products } from "@/utils/products";
import { useRouter } from 'next/navigation';
import { Card, Col, Row } from "antd";
import { Poppins } from "next/font/google";
import Image from "next/image"

const poppins = Poppins({ weight: ["500", "300"], subsets: ["latin"] });

export default function Products() {

  const router = useRouter();

  const navigateToPage = (title:string) => {
    router.push(`/${title}`);
  };

  return (
    <div className={poppins.className} style={{margin:"64px"}}>
      <div>
        <h2 style={{fontSize:"24px", fontWeight:"300"}}>Produtos</h2>
      </div>.
      <Row style={{ justifyContent: "center", margin:"0 128px" }} gutter={[16, 24]}>
        {products.products.moluscos.map((fish) => (
          <Col key={fish.title} span={8}>
            <Card onClick={() => navigateToPage(fish.title)}>
              <Image src={fish.imgLink} width={462} height={260} alt="" />
              <h3>{fish.title}</h3>
              <p>{fish.shortDescription}  </p>
            </Card>
          </Col>
        ))}
        {products.products.peixes.map((fish) => (
          <Col key={fish.title} span={8}>
            <Card onClick={() => navigateToPage(fish.title)}>
              <Image src={fish.imgLink} width={462} height={260} alt="" />
              <h3>{fish.title}</h3>
              <p>{fish.shortDescription}  </p>
            </Card>
          </Col>
        ))}
        {products.products.frutosDoMar.map((fish) => (
          <Col key={fish.title} span={8}>
            <Card onClick={() => navigateToPage(fish.title)}>
              <Image src={fish.imgLink} width={462} height={260} alt="" />
              <h3>{fish.title}</h3>
              <p>{fish.shortDescription}  </p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}


const flex: React.CSSProperties = {
  display: "flex",
  alignItems: "center",

}
const flexContent: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around"

}

const cartTitle: React.CSSProperties = {
  fontSize: 32,
  marginLeft: "16px",
  fontWeight: '300'
}

const cardDescription: React.CSSProperties = {
  width: 300,
  fontSize: 20,
  fontWeight: '300'
}

const headImput: React.CSSProperties = {
  width: 255,
  height: 60,
  backgroundColor: "#F5F5F5",
  margin: "0 8px 32px 8px",
}

const textAreaStyle: React.CSSProperties = {
  width: 801,
  height: 384,
  backgroundColor: "#F5F5F5",
  margin: "0 8px"
}

const ButtonSubmitStyle: React.CSSProperties = {
  marginTop: 32,
  width: 264,
  height: 67,
  backgroundColor: "#FF8500",
  color: "#FAFAFA",
  fontSize: 16
}