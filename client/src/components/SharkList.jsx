import { useEffect, useState } from "react";
import { getAllSharks } from "../api/shark.api";
import { SharkCard } from "./SharkCard";

export function SharkList() {
  const [sharks, setShark] = useState([]);

  useEffect(() => {
    async function loadSharks() {
      const res = await getAllSharks();
      setShark(res.data);
    }
    loadSharks();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3">
      {sharks.map((shark) => (
        <SharkCard key={shark.id} shark={shark} />
      ))}
    </div>
  );
}
