import Footer from "@/components/footer";
import Barang from "@/components/home/barang";
import Jumbotron from "@/components/home/jumbotron";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Barang />
      <Footer />
    </div>
  );
}
