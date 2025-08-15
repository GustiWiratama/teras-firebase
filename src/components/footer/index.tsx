import Image from "next/image";

const Footer = () => {
  return (
    <div className="text-center md:text-start p-7 md:px-32 bg-orange-400 text-white">
      <div className="md:flex foot justify-between">
        <div className="title">
          <h1 className="md:text-2xl font-semibold">Téras Bali</h1>
          <p className="w-2/3 hidden md:block">
            C4C3+58R, Br. Simpangan, Pejaten, Kec. Kediri, Kabupaten Tabanan,
            Bali 82112
          </p>
        </div>
        <div className="social">
          <h1 className="text-2xl font-semibold hidden md:block">
            Sosial Media
          </h1>
          <div className="social-logo  flex items-center justify-center gap-5">
            <a href="/">
              <Image
                src="/wa-logo.svg"
                alt="Chat Admin"
                width={40}
                height={40}
              />
            </a>
            <a href="/">
              <Image
                src="/wa-logo.svg"
                alt="Chat Admin"
                width={40}
                height={40}
              />
            </a>
            <a href="/">
              <Image
                src="/wa-logo.svg"
                alt="Chat Admin"
                width={40}
                height={40}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="copy text-center pt-10 text-sm">
        <p>© 2023 Téras Bali. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
