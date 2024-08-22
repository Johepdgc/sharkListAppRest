import { useNavigate } from "react-router-dom";

export function SharkCard({ shark }) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-zinc-800 p-3 hover:bg-gray-600 cursor-pointer"
      onClick={() => {
        navigate(`/sharks/${shark.id}`);
      }}
    >
      <h1 className="font-bold uppercase">{shark.name}</h1>
      <hr className="border-none border-t border-gray-300 my-5" />
      <p className="text-slate-300">{shark.description}</p>
      {shark.image && (
        <img
          src={shark.image}
          alt={shark.name}
          className="w-full h-48 object-cover my-5 rounded-xl"
        />
      )}
      <hr className="border-none border-t border-gray-300 my-5" />
      <p className="text-slate-300">{shark.species}</p>
      <hr className="border-none border-t border-gray-300 my-2" />
    </div>
  );
}
