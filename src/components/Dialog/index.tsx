import { X } from "lucide-react";
import { ReactNode } from "react";
import styles from "./Dialog.module.css";

export default function Dialog(props: DialogProps) {
  return (
    <div className="fixed w-full h-full left-0 top-0 bg-transparent flex items-center justify-center">
      <div
        className={`py-4 px-8 max-w-lg w-full rounded-md shadow-2xl ${styles.dialog}`}
      >
        <div className="flex justify-between items-center">
          <span className="font-bold">{props.title}</span>
          <X className="cursor-pointer" size={18} onClick={props.onClose} />
        </div>
        <div className="mt-8">{props.children}</div>
      </div>
    </div>
  );
}

interface DialogProps {
  onClose?: () => void;
  children?: ReactNode;
  title?: string;
}
