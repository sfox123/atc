import generateStylesheetObject from "@/common/generateStylesheetsObject";
import Lines from "@/components/common/Lines";
import ProgressScroll from "@/components/common/ProgressScroll";
import Cursor from "@/components/common/cusor";
import LoadingScreen from "@/components/common/loader";
import Clients from "@/components/home-main/Clients";
import Feat from "@/components/home-main/Feat";
import Footer from "@/components/common/Footer";
import Header from "@/components/home-main/Header";
import Intro from "@/components/home-main/Intro";
import Marq2 from "@/components/common/Marq2";
import Navbar from "@/components/common/Navbar";
import Portfolio from "@/components/home-main/Portfolio";
import Services from "@/components/home-main/Services";
import Script from "next/script";
import Marq from "@/components/home-main/Marq";

export const metadata = {
  title: "ATC",
  icons: {
    icon: "/assets/imgs/fav.png",
    shortcut: "/assets/imgs/fav.png",
    other: generateStylesheetObject([
      "/assets/css/plugins.css",
      "/assets/css/style.css",
      "https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap",
      "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap",
    ]),
  },
};

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="content">
          <h1>🚧 Website Under Construction 🚧</h1>
          <p>
            We're working hard to bring you something amazing. Please check back
            soon!
          </p>
          <p className="contact">
            Contact us at:
            <a href="mailto:info@asiantradecentre.com">
              info@asiantradecentre.com
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
