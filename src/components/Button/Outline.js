export default function ButtonOutline({ text, click, type = 'button', className }) {
    return (
      <>
        <button
          className={`shadow-md px-4 py-2 outline-2 uppercase font-semibold rounded-lg hover:opacity-80 focus:ring-0 ${className}`}
          type={type}
          onClick={click}
        >
          {text}
        </button>
      </>
    );
  }