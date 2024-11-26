import DogLayout from "./Dogsinfo/doglayout";

export default function Page() {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="container mx-auto">
        <br className="my-4" />
        <DogLayout />
      </div>
    </div>
  );
}
