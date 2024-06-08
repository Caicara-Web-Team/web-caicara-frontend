import { Button, Carousel } from "antd";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({ weight: "500", subsets: ["latin"] });

export default function Home() {


  return (
    <>
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
      <div style={styles.SecondContainer}>
        <div>
          <div style={styles.SubHeader}>
            produção diária
          </div>
          <div>
            <h1 style={styles.CarouselTitle}>
              Mais Vendidos
            </h1>
            <p style={styles.CarouselDescription}>
              A produção diária na nossa fábrica. novas práticas de gestão de qualidade.
            </p>
          </div>
          <div>
            <Button style={styles.CarouselButton}>
              Catálogo
            </Button>
          </div>
        </div>
        <div>
        </div>
      </div>
    </>
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
    padding: "128px 0 0 128px",
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
    margin: "0 128px",
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
    margin: "0 128px",
  }
}