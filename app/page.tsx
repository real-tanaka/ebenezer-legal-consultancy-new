import Image from "next/image";
import { Inter } from "@next/font/google";
import Header from "./Header";
import Feature from "./Feature";
import Footer from "./Footer";
import Team from "./Team";
import Contact from "./Contact";
import Blog from "./Blog";
import Feature2 from "./Feature2";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Header />
      <Feature />
      <Feature2 />
      <Team />
      <Contact />
      <Blog />
      <Footer />
    </div>
  );
}
