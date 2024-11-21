'use client'
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import CompanyDescription from "./components/CompanyDescription";
import CompanyOverview from "./components/CompanyOverview";
import ServiceComponent from "./components/ServiceComponent";
import LogoTray from "./components/LogoTray";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar/>
      <CompanyDescription />
      <CompanyOverview />
      <ServiceComponent />
      <LogoTray/>
      <Footer/>
    </> 
  );
}
