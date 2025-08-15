const Barang = () => {
  // Step 1: Array data barang
  const dataBarang = [
    {
      id: 1,
      nama: "Baju",
      harga: "Rp. 100.000",
      stok: 10,
      gambar:
        "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 2,
      nama: "Sepatu",
      harga: "Rp. 250.000",
      stok: 10,
      gambar:
        "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 3,
      nama: "Tas",
      harga: "Rp. 150.000",
      stok: 10,
      gambar:
        "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 4,
      nama: "Topi",
      harga: "Rp. 75.000",
      stok: 10,
      gambar:
        "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 5,
      nama: "Kacamata",
      harga: "Rp. 50.000",
      stok: 10,
      gambar:
        "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 6,
      nama: "Kacamata",
      harga: "Rp. 50.000",
      stok: 10,
      gambar:
        "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  return (
    <div className="px-5 py-5 md:py-0 md:px-32" id="barang">
      <div className="title">
        <h1 className="text-2xl">Barang Tersedia</h1>
        <hr className="border-gray-300 w-20 border-b-2 mt-2 mb-2" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-0">
        {dataBarang.map((barang) => (
          <div
            key={barang.id}
            className="card hover:shadow-lg transform hover:scale-105 transition-transform duration-200 mb-10 rounded-xl"
          >
            <img className="rounded-xl" src={barang.gambar} alt={barang.nama} />
            <div className="card-body p-3 ">
              <h1 className="card-title">{barang.nama}</h1>
              <p className="card-text">{barang.harga}</p>
              <p className="card-stock">{`Stok : ${barang.stok}`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Barang;
