import Image from "next/image";
import ellipse1 from "../../assets/images/banner/ellipse1.svg";
import ellipse2 from "../../assets/images/banner/ellipse2.svg";
import waves from "../../assets/images/banner/waves.svg";
import imgBanner from "../../assets/images/banner/img-banner.png";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import whatshapp from "../../assets/icons/whatshapp.svg";
import tiktok from "../../assets/icons/tiktok.svg";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="h-72 relative bg-primary-foreground">
      <Image src={ellipse1} alt="" className="absolute" />
      <Image src={ellipse2} alt="" className="absolute right-0 bottom-0" />
      <Image src={waves} alt="" className="absolute right-28 bottom-4" />
      <div className="absolute w-full h-full flex justify-between items-center pl-16 pr-52">
        <div>
          <Image src={imgBanner} alt="" />
        </div>
        <div>
          <p>Artigos</p>
          <p>para seu bebê</p>
          <Link
            href="/products"
            className="bg-primary px-6 py-2 block text-white"
          >
            PRODUTOS
          </Link>
        </div>
        <div>
          <ul className="flex gap-6">
            <li>
              <Image src={facebook} alt="" />
            </li>
            <li>
              <Image src={instagram} alt="" />
            </li>
            <li>
              <Image src={whatshapp} alt="" />
            </li>
            <li>
              <Image src={tiktok} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
