'use client';
import Image from "next/image"
import React from "react"
import { Button, Input } from 'antd';
import TextArea from "antd/es/input/TextArea";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["500", "300"], subsets: ["latin"] });

export default function Contact() {

  return (
    <div style={{ marginLeft: 128, marginBottom:64 }} className={poppins.className}>
      <div style={flexContent}>
        <div>
          <div>
            <h1 style={cartTitle}>Contato</h1>
            <br />
            <div style={flex}>
              <Image src={"iconPhone.svg"} width={50} height={50} alt="Telefone" />
              <h5 style={cartTitle}>Telefone</h5>
            </div>
            <p style={cardDescription}>Estamos disponíveis 24 horas por dia, 7 dias por semana.</p>
            <p style={cardDescription}>Telefone: +8801611112222</p>
          </div>
          <div>
            <div style={flex}>
              <Image src={"iconMail.svg"} width={50} height={50} alt="Telefone" />
              <h5 style={cartTitle}>Escreva para nós.</h5>
            </div>
            <p style={cardDescription}>Preencha nosso formulário e entraremos em contato dentro de 24 horas.</p>
            <p style={cardDescription}>Email: suporte@caicara.com</p>
          </div>
        </div>
        <div>
          <form>
            <div style={flex}>
              <Input placeholder="Seu Nome * " style={headImput} />
              <Input placeholder="Seu Email * " style={headImput} />
              <Input placeholder="Seu Telefone " style={headImput} />
            </div>
            <div>
              <TextArea style={textAreaStyle} placeholder="Sua mensagem * " />
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button style={ButtonSubmitStyle}>Enviar</Button>
            </div>
          </form>
        </div>
      </div>
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
