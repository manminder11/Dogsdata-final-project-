import DogLayout from "./Dogsinfo/doglayout";

export default function Page() {
  return (
    <div className="p-4 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="container mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Dog Information</h1>
        <DogLayout />
      </div>
    </div>
  );
}
