import Link from "next/link";
import { ProfileLayout } from "../page";

export default function Orders() {
  return (
    <ProfileLayout>
      <ul className="flex flex-col gap-4">
        <li className="flex gap-3 justify-between items-center text-sm flex-1 bg-white rounded-md py-2 px-4 shadow-md">
          <div className="flex flex-col">
            <span className="text-lg font-semibold  mb-2">
              Bolsa Térmica +2
            </span>
            <span>Total: R$150,00</span>
            <span>Status: Aguardando pagamento</span>
            <span>Código: AB123456CD</span>
            <div className="flex gap-4 text-blue-500">
              <Link href="#!">Concluir compra</Link>
              <Link href="#!">Ver detalhes</Link>
            </div>
          </div>
        </li>
        <li className="flex gap-3 justify-between items-center text-sm flex-1 bg-white rounded-md py-2 px-4 shadow-md">
          <div className="flex flex-col">
            <span className="text-lg font-semibold  mb-2">
              Bolsa Térmica +2
            </span>
            <span>Total: R$150,00</span>
            <span>Status: Em trânsito</span>
            <span>Código: AB123456CD</span>
            <div className="flex gap-4 text-blue-500">
              <Link href="#!">Ver detalhes</Link>
            </div>
          </div>
        </li>
        <li className="flex gap-3 justify-between items-center text-sm flex-1 bg-white rounded-md py-2 px-4 shadow-md">
          <div className="flex flex-col">
            <span className="text-lg font-semibold  mb-2">
              Bolsa Térmica +2
            </span>
            <span>Total: R$150,00</span>
            <span>Status: Em trânsito</span>
            <span>Código: AB123456CD</span>
            <div className="flex gap-4 text-blue-500">
              <Link href="#!">Ver detalhes</Link>
            </div>
          </div>
        </li>
        <li className="flex gap-3 justify-between items-center text-sm flex-1 bg-white rounded-md py-2 px-4 shadow-md">
          <div className="flex flex-col">
            <span className="text-lg font-semibold  mb-2">
              Bolsa Térmica +2
            </span>
            <span>Total: R$150,00</span>
            <span>Status: Em trânsito</span>
            <span>Código: AB123456CD</span>
            <div className="flex gap-4 text-blue-500">
              <Link href="#!">Ver detalhes</Link>
            </div>
          </div>
        </li>
        <li className="flex gap-3 justify-between items-center text-sm flex-1 bg-white rounded-md py-2 px-4 shadow-md">
          <div className="flex flex-col">
            <span className="text-lg font-semibold  mb-2">
              Bolsa Térmica +2
            </span>
            <span>Total: R$150,00</span>
            <span>Status: Em trânsito</span>
            <span>Código: AB123456CD</span>
            <div className="flex gap-4 text-blue-500">
              <Link href="#!">Ver detalhes</Link>
            </div>
          </div>
        </li>
        <li className="flex gap-3 justify-between items-center text-sm flex-1 bg-white rounded-md py-2 px-4 shadow-md">
          <div className="flex flex-col">
            <span className="text-lg font-semibold  mb-2">
              Bolsa Térmica +2
            </span>
            <span>Total: R$150,00</span>
            <span>Status: Em trânsito</span>
            <span>Código: AB123456CD</span>
            <div className="flex gap-4 text-blue-500">
              <Link href="#!">Ver detalhes</Link>
            </div>
          </div>
        </li>
        <li className="flex gap-3 justify-between items-center text-sm flex-1 bg-white rounded-md py-2 px-4 shadow-md">
          <div className="flex flex-col">
            <span className="text-lg font-semibold  mb-2">
              Bolsa Térmica +2
            </span>
            <span>Total: R$150,00</span>
            <span>Status: Em trânsito</span>
            <span>Código: AB123456CD</span>
            <div className="flex gap-4 text-blue-500">
              <Link href="#!">Ver detalhes</Link>
            </div>
          </div>
        </li>
      </ul>
    </ProfileLayout>
  );
}
