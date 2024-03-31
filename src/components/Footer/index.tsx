import Image from "next/image";
import logo from "../../assets/images/header/logo.png";
import facebook from "../../assets/icons/footer/facebook.svg";
import instagram from "../../assets/icons/footer/instagram.svg";
import whatshapp from "../../assets/icons/footer/whatshapp.svg";
import tiktok from "../../assets/icons/footer/tiktok.svg";

export default function Footer() {
  return (
    <div className="max-md:px-6 px-20 py-20 bg-[#F5F5F5]">
      <Image src={logo} alt="" />
      <div className="flex gap-16 mt-16 flex-wrap">
        <div className="flex-1 flex flex-col gap-2 text-[#B0B0B0]">
          <b className="text-black">Políticas da Empresa</b>
          <a>Acompanhar pedido</a>
          <a>Envio e prazo de entrega</a>
          <a>Fale conosco</a>
          <a>Termos de serviço</a>
          <a>Política de reembolso</a>
          <a>Política de garantia</a>
        </div>
        <div className="flex-1 flex flex-col gap-2 text-[#B0B0B0]">
          <b className="text-black">Central de atendimento</b>
          <a>Horário de atendimento: 8:30 às 12:00 e das 13:00 às 18:00</a>
          <a>Entre em contato cosnosco!</a>
          <a>Whatsapp: (51)99987-8932</a>
          <a>E-mail: lyamarasbaby@gmail.com</a>
        </div>
        <div className="flex-1">
          <b>Siga a Lyamara´s Baby</b>
          <ul className="flex gap-4 mt-6 flex-wrap">
            <li className="w-fit">
              <Image src={facebook} className="w-10" alt="" />
            </li>
            <li className="w-fit">
              <Image src={instagram} className="w-10" alt="" />
            </li>
            <li className="w-fit">
              <Image src={whatshapp} className="w-10" alt="" />
            </li>
            <li className="w-fit">
              <Image src={tiktok} className="w-10" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
