export default function Word(props) {
  const { data, correctChars } = props;

  const splitWords = (word) => {
    const res = word.split("");
    return res;
  };

  const splitAnswer = splitWords(data);

  return (
    <div className="flex justify-center w-full h-full">
      <ul className="flex flex-row space-x-5">
        {splitAnswer.map((char, index) => (
          <li key={index} className="border-b-8 w-20 h-20">
            {correctChars.includes(char) && char}
          </li>
        ))}
      </ul>
    </div>
  );
}
