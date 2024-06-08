'use client';
import { products } from "@/utils/products";
import { Button, Card, Col, Row } from "antd";
import dynamic from "next/dynamic";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { useState } from "react";


const poppins = Poppins({ weight: ["500", "300"], subsets: ["latin"] });

export default function Home() {

  const [value, setValue] = useState("MAIS VENDIDOS")

  return (
    <div style={{
      padding:"0 128px 128px",
      
    }} className={poppins.className}>
      <div style={styles.MainContainer}>
        <div>
          <h1 style={styles.PageTitle}>Explore nossa seleção fresca de peixes hoje mesmo!</h1>
          <p style={styles.PageDescription}>Explore agora e descubra as melhores ofertas e produtos que temos para você!</p>
          <Button style={styles.MainButton}>
            Nossos Produtos
          </Button>
        </div>
        <div>
          <Image width={996} height={996} src={"/goldFish.svg"} alt="peixinho dourado" />
        </div>
      </div>
      <div style={{ height: "18px", backgroundColor: "#FEAD04" }}></div>
      <div style={{ height: "45px", backgroundColor: "#FF8500" }}></div>
      <div>
        <h2 style={{ color: "#FEAD04", textAlign: "center", fontWeight: "300", fontSize: 45 }}>NOSSOS PRODUTOS</h2>
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ display: "flex", }}>
          <Button style={{
            backgroundColor: value === "MAIS VENDIDOS" ? "#FEAD04":"transparent",
            color: value === "MAIS VENDIDOS" ? "#fff":"#000",
            width: "200px",
            height: "87px",
            fontSize: "28px",
            fontWeight: "bolder"
          }}
            onClick={() => setValue("MAIS VENDIDOS")}
          >Moluscos</Button>
          <Button style={{
            backgroundColor: value === "PEIXES" ? "#FEAD04":"transparent",
            color: value === "PEIXES" ? "#fff":"#000",
            width: "200px",
            height: "87px",
            fontSize: "28px",
            fontWeight: "bolder",
            margin: "0 32px"

          }}
            onClick={() => setValue("PEIXES")}
          >Peixes</Button>
          <Button style={{
            backgroundColor: value === "MARISCOS" ? "#FEAD04":"transparent",
            color: value === "MARISCOS" ? "#fff":"#000",
            width: "200px",
            height: "87px",
            fontSize: "28px",
            fontWeight: "bolder",
          }}
            onClick={() => setValue("MARISCOS")}
          >Mariscos</Button>
        </div>
      </div>
      <br />
      <Row style={{ justifyContent: "center" }} gutter={[16, 24]}>
        {value === "MAIS VENDIDOS" && (
          <>
            {products.products.moluscos.map((fish) => (
              <Col key={fish.title} span={8}>
                <Card>
                  <Image src={fish.imgLink} width={462} height={260} alt="" />
                  <h3>{fish.title}</h3>
                  <p>{fish.shortDescription}  </p>
                </Card>
              </Col>
            ))}
          </>
        )}
        {value === "PEIXES" && (
          <>
            {products.products.peixes.map((fish) => (
              <Col key={fish.title} span={8}>
                <Card>
                  <Image src={fish.imgLink} width={462} height={260} alt="" />
                  <h3>{fish.title}</h3>
                  <p>{fish.shortDescription}  </p>
                </Card>
              </Col>
            ))}
          </>
        )}
        {value === "MARISCOS" && (
          <>
            {products.products.frutosDoMar.map((fish) => (
              <Col key={fish.title} span={8}>
                <Card>
                  <Image src={fish.imgLink} width={462} height={260} alt="" />
                  <h3>{fish.title}</h3>
                  <p>{fish.shortDescription}  </p>
                </Card>
              </Col>
            ))}
          </>
        )}
      </Row>
    </div>
  );
}

const styles = {
  MainContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    height: "924px",
    background: "linear-gradient(90deg, rgba(250,250,250,1) 0%, rgba(228,228,228,1) 100%)"
  },
  PageTitle: {
    fontSize: "64px",
    color: "#FEAD04",
    width: 500
  },
  PageDescription: {
    width: 500,
    padding: "0 128px",
    fontSize: "28px"
  },
  MainButton: {
    backgroundColor: "#FF8500",
    color: "#fff",
    width: "284px",
    height: "87px",
    fontSize: "28px",
    fontWeight: "bolder",
  },
  SecondContainer: {
    padding: "128px 0 0 64px",
    display: "flex"
  },
  SubHeader: {
    width: 500,
    padding: "0 128px",
    fontSize: "28px"
  },
  CarouselTitle: {
    width: 500,
    padding: "0 128px",
    fontSize: "45px"
  },
  CarouselDescription: {
    width: 300,
    padding: "0 128px",
    fontSize: "28px"
  },
  CarouselButton: {
    backgroundColor: "#FEAD04",
    color: "#fff",
    width: "200px",
    height: "87px",
    fontSize: "28px",
    fontWeight: "bolder",
  }
}