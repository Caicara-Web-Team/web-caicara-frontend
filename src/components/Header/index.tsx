import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";

export default function Header() {
  return (
    <div style={styles.mainStyle}>
      <Image width={361} height={162} src={"/logo.svg"} alt={""}/>
      <ul style={styles.list}>
        <li style={styles.list.item}>Inicio</li>
        <li style={styles.list.item}>Quem Somos</li>
        <li style={styles.list.item}>Produtos</li>
        <li style={styles.list.item}>Contato</li>
        <li style={styles.list.item}>Login</li>
      </ul>
      <ul style={styles.list}>
        <li style={styles.list.item}><CiSearch /></li>
        <li style={styles.list.item}><FiShoppingCart /></li>
      </ul>
    </div>
  );
}

const styles = {
  mainStyle: {
    margin: "0 64px",
    display:"flex",
    alignItems:"center",
    justifyContent: "space-around"
  },
  list:{
    display:"flex",
    item:{
      listStyle: "none",
      margin:"0 32px",
      fontSize: "22px",
      cursor:"pointer"
    }
  }
}