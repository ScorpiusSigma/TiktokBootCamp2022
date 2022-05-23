export default function Keypad(props) {
  const { wrongChars, correctChars, handleKeyPress } = props;
  const alphabets = [...Array(26)].map((x, index) =>
    String.fromCharCode(65 + index)
  );

  const buttonStyle = (alphabet) => {
    const style =
      "w-10 h-10 font-bold sm:w-14 sm:h-14 md:w-20 md:h-20 sm:text-3xl md:text-4xl ";
    if (correctChars.includes(alphabet)) {
      return style + "bg-green-400";
    }

    if (wrongChars.includes(alphabet)) {
      return style + "bg-red-400";
    }

    return style;
  };

  return (
    <div className="grid lg:hidden grid-cols-6 md:grid-cols-9 md:grid-rows-4 p-4 md:gap-1">
      {alphabets.map((alphabet, index) => (
        <button
          key={index}
          className={buttonStyle(alphabet)}
          onClick={(e) => {
            e.key = alphabet;
            handleKeyPress(e);
          }}
        >
          {alphabet}
        </button>
      ))}
    </div>
  );
}
