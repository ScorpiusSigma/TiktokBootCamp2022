function WrongWordPool(props) {
  const { data } = props;

  return (
    <div className="hidden lg:flex flex-col items-center w-full h-full gap-5 py-3 px-6">
      <h1 className="text-2xl md:text-5xl">Wrong Word Pool</h1>
      <div className="flex flex-row flex-wrap border rounded-xl w-[60%] min-h-[64px] md:min-h-[80px] gap-2 p-4 text-red-500 text-xl md:text-4xl">
        {data.map((char, index) => (
          <div key={index}>{char}</div>
        ))}
      </div>
    </div>
  );
}

export default WrongWordPool;
