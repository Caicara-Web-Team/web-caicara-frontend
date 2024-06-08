import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "300",subsets: ["latin"] });

export default function Header() {


  return (
    <div style={styles.mainStyle}>
      <Image width={361} height={162} src={"/logo.svg"} alt={""} />
      <ul style={styles.list}>
        <li style={styles.list.item}>
        <Link style={{textDecoration:"none", color:"#000"}} className={poppins.className} href={"/"}>Inicio</Link>
          </li>
        <li style={styles.list.item}>
        <Link style={{textDecoration:"none", color:"#000"}} className={poppins.className} href={"/about"}>Quem Somos</Link>
          </li>
        <li style={styles.list.item}>
        <Link style={{textDecoration:"none", color:"#000"}} className={poppins.className} href={"/products"}>Productos</Link>
          </li>
        <li style={styles.list.item}>
        <Link style={{textDecoration:"none", color:"#000"}} className={poppins.className} href={"/contact"}>Contato</Link>
          </li>
        <li style={styles.list.item}>
        <Link style={{textDecoration:"none", color:"#000"}} className={poppins.className} href={"/login"}>Login</Link>
          </li>
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
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around"
  },
  list: {
    display: "flex",
    item: {
      listStyle: "none",
      margin: "0 32px",
      fontSize: "22px",
      cursor: "pointer",
    }
  }
}