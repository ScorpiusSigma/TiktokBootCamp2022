export default function WrongWordPool(props) {
  const { data } = props;

  return (
    <div className="flex flex-col items-center w-full h-full">
      <h1>Wrong Word Pool</h1>
      <div className="flex flex-row flex-wrap border w-full h-32 gap-2 p-4 text-red-500">
        {data.map((char, index) => (
          <div key={index} className="">
            {char}
          </div>
        ))}
      </div>
    </div>
  );
}
