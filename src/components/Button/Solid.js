export default function ButtonSolid({ text, click, type = 'button', className }) {
    return (
      <>
        <button
          className={`shadow-md px-4 py-2.5 uppercase font-semibold rounded-lg hover:opacity-80 focus:ring-0 focus:outline-none ${className}`}
          type={type}
          onClick={click}
        >
          {text}
        </button>
      </>
    );
  }