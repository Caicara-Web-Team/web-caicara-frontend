import Image from "next/image";
import React from "react";

import { Montserrat, Poppins } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });
const poppins = Poppins({ weight: ["500", "300"], subsets: ["latin"] });

export default function Aboult() {
  return (
    <div>
      <Image src={"/aboutBg.svg"} width={1905} height={720} alt="golira" />
      <h1 className={montserrat.className} style={title}>Quem Somos</h1>
      <br/>
      <p style={descriptions} className={poppins.className}>
        Bem-vindo à Cooperativa Caiçara, uma organização dedicada ao apoio dos
        pescadores ribeirinhos e do litoral nordestino. Nosso compromisso é promover
        o desenvolvimento sustentável dessas comunidades, fornecendo suporte e recursos
        essenciais para o seu crescimento.
      </p>
      <br/>
      <br/>
      <h3 style={titles} className={poppins.className}>Equipe de Desenvolvimento do Sistema:</h3>
      <p style={descriptions} className={poppins.className}>Nosso sistema de gestão foi cuidadosamente desenvolvido por uma equipe talentosa da Escola UNICAP - ICAM Tech, composta por:</p>
      <ul>
        <li style={descriptions} className={poppins.className}>Andressa Rayane</li>
        <li style={descriptions} className={poppins.className}>Guilherme Henrique</li>
        <li style={descriptions} className={poppins.className}>Hylan Silva</li>
        <li style={descriptions} className={poppins.className}>Ketyllen Oliveira</li>
        <li style={descriptions} className={poppins.className}>Lucas Bernardino</li>
        <li style={descriptions} className={poppins.className}>Welliana Maria</li>
      </ul>
      <br/>
      <br/>
      <br/>
      <h3 style={titles} className={poppins.className}>Nosso Compromisso com o Desenvolvimento Comunitário</h3>
      <br/>
      <br/>
      <p style={descriptions} className={poppins.className}>
        Além de nossas operações comerciais, estamos empenhados em promover
        o desenvolvimento educacional e pessoal de nossos colaboradores e suas famílias.
        Através de iniciativas, projetos e desafios, buscamos criar um ambiente propício
        para o aprendizado e o progresso contínuo de nossa comunidade. Explore nosso site
        para saber mais sobre a Cooperativa Caiçara e como estamos fazendo a diferença nas
        vidas das pessoas e no meio ambiente. Junte-se a nós nesta jornada de crescimento e
        sustentabilidade!
      </p>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  )
}

const title: React.CSSProperties = {
  color: "#FEAD04",
  margin: "0 0 0 128px",
  fontSize: "64px",
  paddingBottom: "32px",
  fontWeight:"500"
}

const titles: React.CSSProperties = {
  margin: "0 0 0 128px",
  fontSize: 28,
  width: "70vw",
  fontWeight:"500"
}

const descriptions: React.CSSProperties = {
  margin: "0 0 0 128px",
  fontSize: 28,
  width: "70vw",
  fontWeight:"300"
}