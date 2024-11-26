import DogLayout from "./Dogsinfo/doglayout";

export default function Page() {
  const handleClick = () => {
    alert("🐶");
  };

  return (
    <>
      <div className="text-2xl font-bold text-center mt-4 hover:text-blue-500" onClick={handleClick}>
        Dogs-Data
      </div>
      <br />
      <DogLayout />
    </>
  );
}
