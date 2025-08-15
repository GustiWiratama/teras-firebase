import { db } from "@/lib/firebase";
import { get, ref } from "firebase/database";
import { useEffect, useState } from "react";

interface Barang {
  id: string;
  nama: string;
  harga: number;
  stok: number;
  gambar: string;
}

export default function BarangPage() {
  const [dataBarang, setDataBarang] = useState<Barang[]>([]);

  useEffect(() => {
    const ambilData = async () => {
      const barangRef = ref(db, "products");
      const snapshot = await get(barangRef);

      if (snapshot.exists()) {
        const data = snapshot.val();
        const barangList: Barang[] = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setDataBarang(barangList);
      } else {
        console.log("Data kosong");
      }
    };

    ambilData();
  }, []);

  return (
    <div className="p-14">
      <h1 className="hidden md:flex md:text-2xl mb-8">Daftar Barang</h1>
      <div className="grid grid-cols-2 cols md:grid-cols-4  gap-4">
        {dataBarang.map((barang) => (
          <div
            key={barang.id}
            className="card hover:shadow-2xl transform hover:scale-105 transition-transform duration-200 rounded-xl p-3"
          >
            <img
              src={barang.gambar}
              alt={barang.nama}
              className="w-full h-64 object-cover card-body "
            />
            <h2 className="text-lg font-bold">{barang.nama}</h2>
            <p>Harga: {barang.harga}</p>
            <p>Stok: {barang.stok}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
