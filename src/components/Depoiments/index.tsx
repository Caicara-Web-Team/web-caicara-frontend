import { Card, Rate, Row, Col } from "antd";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({ weight: ["500", "300"], subsets: ["latin"] });

export default function Depoiments() {
  return (
    <div className={poppins.className}>
      <div style={{ display: "flex", justifyContent: "space-around", marginBottom:64 }}>
        <Card style={{ width: "40vw", backgroundColor:"#F0F0F0", border:"1px solid #D7D7D7" }}>
          <div style={{ display: "flex" }}>
            <div>
              <Image src={"/images/marcos_silva.png"} width={132} height={180} alt={"Pessoa"} />
            </div>
            <div>
              <h3 style={{fontSize:28}}>MARCOS SILVA</h3>
              <Rate allowHalf value={4.5} />
              <p style={{fontSize:18}}>
                Fiquei extremamente satisfeito com a experiência de compra
                na Comperativa Caiçara. O processo de compra foi fácil e
                eficiente, e a variedade de produtos disponíveis
                superou minhas expectativas. Além disso, a equipe de
                atendimento ao cliente foi excepcionalmente prestativa e amigável.
              </p>
            </div>
          </div>
        </Card>
        <Card style={{ width: "40vw", backgroundColor:"#F0F0F0", border:"1px solid #D7D7D7" }}>
          <div style={{ display: "flex" }}>
            <div>
              <Image src={"/images/ana_maria.png"} width={132} height={180} alt={"Pessoa"} />
            </div>
            <div>
              <h3 style={{fontSize:28}}>ANA MARIA</h3>
              <Rate allowHalf value={3.5} />
              <p style={{fontSize:18}}>
                Minha experiência na Comperativa Caiçara foi além das minhas expectativas.
                A navegação no site foi intuitiva e encontrei exatamente o que estava
                procurando com facilidade. A entrega foi rápida e os
                produtos chegaram em perfeitas condições.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}