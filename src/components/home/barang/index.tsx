// app/barang/page.tsx atau pages/barang.tsx
"use client";

import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";
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
      try {
        console.log("DB instance:", db); // debug cek db
        const querySnapshot = await getDocs(collection(db, "products"));
        const barangList: Barang[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<Barang, "id">),
        }));
        setDataBarang(barangList);
      } catch (err) {
        console.error("Error ambil data:", err);
      }
    };

    ambilData();
  }, []);

  return (
    <div className="p-4 md:p-14">
      <h1 className="hidden md:flex md:text-2xl mb-8">Daftar Barang</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {dataBarang.map((barang) => (
          <div
            key={barang.id}
            className="card hover:shadow-2xl transform hover:scale-105 transition-transform duration-200 rounded-xl p-3"
          >
            <Image
              src={barang.gambar}
              alt={barang.nama}
              className="w-full md:h-64 object-cover card-body"
              width={200}
              height={200}
            />
            <h2 className="text-lg font-bold">{barang.nama}</h2>
            <p>{barang.harga}/pcs</p>
            <p>Stok: {barang.stok}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
