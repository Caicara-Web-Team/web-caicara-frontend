import { PiInstagramLogoFill } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import { Input } from "antd";

export default function Footer() {
  return (
    <div style={{
      backgroundColor: "#FEAD04",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center"
    }}>
      <div style={styles.mainStyle}>
        <div style={styles.text.mainContainer}>
          <p style={styles.text.title}>Bem-Vindo À Cooperativa Caiçara!</p>
          <p style={{
            color: "#fff",
            width: "300px",
            textAlign: "start"
          }}>
            Somos uma empresa comprometida em fornecer
            aos nossos clientes uma experiência de
            compra excepcional, onde qualidade,
            variedade e atendimento ao cliente são
            nossos principais pilares.
          </p>
          <ul style={styles.list.listIcons} >
            <li style={styles.list.item}><PiInstagramLogoFill /></li>
            <li style={styles.list.item}><FaFacebook /></li>
          </ul>
        </div>
        <div>
          <p style={styles.text.title}>Inscreva-se na nossa Newsletter</p>
          <Input size="large" placeholder="Email..." />
        </div>
        <div>
          <ul style={{
            display: "flex",
            flexDirection: "column",
          }}>
            <li style={styles.list.item}>Inicio</li>
            <li style={styles.list.item}>Quem Somos</li>
            <li style={styles.list.item}>Produtos</li>
            <li style={styles.list.item}>Contato</li>
            <li style={styles.list.item}>Login</li>
          </ul>
        </div>
      </div>
      <div>
        <a style={styles.link} href="#" target="_blank" rel="noopener noreferrer">contato@caicara.com.br</a>
      </div>
    </div>
  );
}

const styles = {
  mainStyle: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  list: {
    item: {
      listStyle: "none",
      margin: "0 8px",
      fontSize: "15px",
      cursor: "pointer",
      color: "#ffff",
      padding: "6px 0"
    },
    listIcons: {
      display: "flex",
      padding: "16px 0"
    }
  },
  text: {

    title: {
      fontWeight: "bold",
      color: "#fff",
    },
    container: {

    },
    mainContainer: {
      marginTop: "64px"
    }
  },
  container: {
  },
  link: {
    textDecoration: "None",
    fontSize: "15px",
    color: "#ffff",
    margin: "32px 0",

  }
}
