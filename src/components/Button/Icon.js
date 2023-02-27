import Image from "next/image";

export default function ButtonIcon({ icon, className, click }) {
  return (
    <>
      <div
        onClick={click}
        className={`cursor-pointer select-none hover:opacity-80 w-8 h-8 flex items-center justify-center rounded-full shadow-md ${className} p-2.5`}
      >
        <Image
          src={require(`@/assets/icon/${icon}`)}
          className="w-full h-full object-contain"
          alt="icon"
        />
      </div>
    </>
  );
}