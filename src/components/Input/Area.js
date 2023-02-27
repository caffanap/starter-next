export default function InputArea({
    placeholder,
    change,
    name,
    row,
    className,
}) {
    return (
        <>
            <textarea
                rows={row}
                className={`bg-gray-100 px-4 py-2 rounded-lg border-2 focus:bg-gray-50 focus:outline-none border-gray-100 focus:border-primary focus:shadow focus:shadow-primary/30 ${className}`}
                placeholder={placeholder}
                onChange={change}
                name={name}
            />
        </>
    );
}