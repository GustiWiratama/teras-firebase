import Image from "next/image";

const Jumbotron = () => {
  return (
    <div className="flex flex-col-reverse md:flex-col items-center justify-end md:justify-center h-1/3 md:h-screen bg-cover  md:bg-[url('/jumbo-transformed.png')]">
      <div className="jumbo-text  text-center">
        <h1 className="hidden md:block md:text-4xl mt-10 md:mt-0 leading-snug mb-4">
          Jadikan atapmu lebih keras
          <p>
            dengan <span className="text-orange-400">Téras</span>.
          </p>
        </h1>
      </div>
      <div className="search flex mt-[6em] md:mt-0">
        <input
          type="text"
          className="px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
          placeholder="cari barang..."
        />
        <Image
          className="m-3 cursor-pointer
          "
          src="/search.svg"
          alt="search"
          width={20}
          height={20}
          onClick={() => {
            alert("ado sg apo nden");
          }}
        />
      </div>
    </div>
  );
};

export default Jumbotron;
