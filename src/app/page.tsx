"use client"
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import Card from "@/components/card";
import Navbar from "@/components/navbar";
import { useState, useEffect } from "react";
import Hero from "@/assets/veldt/hero.jpg";
import Hero2 from "@/assets/veldt/hero2.jpg";
import Img1 from "@/assets/veldt/wi23.png";
import Pic2 from "@/assets/veldt/sect2.jpg"
import { TiStopwatch } from "react-icons/ti";
import { MdCancel } from "react-icons/md";
import { TbShoppingBag } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";
import CountUp from "react-countup";


import AOS from 'aos';
import 'aos/dist/aos.css'; 

// You can also use <link> for styles




type dName = {
  myName: string
}


export default function Home() {
  const [products, setProducts] = useState();
  const [toggleNav, setToggleNav] = useState("false");


  useEffect(() => {
    async function fetchData() {
      try{
        const response = await axios.get("/api");
        const result = await response.data;
        setProducts(result)
        // console.log(result,"our products");
      }catch(error){
        console.error(error, "this error arose from fetching the products data");
      }
    }
    fetchData();
  },[])

  type Product = {
    category: string,
    description: string,
    materials: string,
    price: number,
    prodId: number,
    prodName: string;
    quantity: number;
    // ...
  };

  //AOS initialization
  useEffect(() => {
    const aosInit = async () => {
      await import ("aos");
      AOS.init({
        duration:1000,
        easing:'ease',
        once: true,
        anchorPlacement: "top-bottom"
      })
    }
    aosInit()
  },[])

 

  return (
    <main className="w-full overflow-x-hidden m-0 p-0 flex flex-col gap-20 mb-15">
      <section className="px-1 py-0.5">
        <div className="relative">
          <Image src={Hero} width={500} height={500} alt="hero" className="w-full rounded-md max-w-full min-h-screen object-cover"/>
          <div className="absolute inset-x-0 top-0 invisible sm:visible"><Navbar /></div>
          <RxHamburgerMenu size={40} className="absolute text-purple-800 sm:invisible top-5 right-3" onClick={() => setToggleNav("true")}/>
          {/* sideBar */}
          <div className={(toggleNav === "false" ? "invisible opacity-0 pointer-events-none " : "visible transition-opacity duration-500")}>
            <div className="w-full fixed inset-0  z-[1002] opacity-70 h-screen bg-black  transition-all duration-500 ease-in-out"></div>
            <div className="w-[80%] fixed space-y-6 top-2 rounded-tr-lg h-screen transition-all duration-500 delay-500 ease-in-out z-[1050] bg-gradient-to-b from-neutral-950 via-neutral-800 to-purple-800 flex flex-col items-center justify-between py-8" >
              <div className="flex items-center justify-between w-full px-2">
                <TbShoppingBag size={35} className="text-white" />
                <MdCancel size={35} className="text-white" onClick={() => setToggleNav("false")} />
              </div>
              <div className="flex flex-col items-center justify-center gap-10 w-full">
                <Link href="/products"><p className="text-neutral-100 hover:text-neutral-400 text-xl">Products</p></Link>
                <p className="text-neutral-100 hover:text-neutral-400 text-xl">Collections</p>
                <p className="text-neutral-100 hover:text-neutral-400 text-xl">About Us</p>
                <Link href="/contacts"><p className="text-neutral-100 hover:text-neutral-400 text-xl">Contacts</p></Link>
              </div>
              <div className="w-full flex items-center justify-center">
                <p className="text-neutral-100 text-4xl tracking-[1rem] font-bold font-cinzel">VELDT</p>
              </div>
            </div>
          </div>
          <div className="w-[100%] px-4 lg:px-10 xl:px-18 text-center sm:flex items-center justify-center sm:justify-start absolute bottom-2 ">
            <div className="w-full flex flex-col items-start justify-center sm:justify-center gap-1 mb-[-150] sm:mb-0">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1 font-cinzel  w-full">
                <TiStopwatch size={40} className="text-[#7209b7]"/>
                <p className="font-thin text-2xl lg:text-4xl text-neutral-300">Precision Redefined</p>
              </div>
              <p className="text-center sm:text-start text-wrap font-thin text-lg lg:text-2xl text-neutral-400 font-cinzel">A fusion of Swiss precision, Japanese durability, and futuristic smart technology.</p>
            </div>
            <div className="invisible sm:visible w-[clamp(20rem,30vw,45rem)] shadow-sm shadow-[#7209b7] rounded-md">
              <Image src={Hero2} width={200} height={200} alt="hero" className="w-full rounded-md "/>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col-reverse  sm:flex-row items-center justify-center gap-4  w-[80%] mx-auto">
        <div className="flex flex-col items-center sm:items-start justify-center gap-4">
          <p data-aos="fade-right" data-aos-delay="100" className="text-4xl lg:text-6xl text-center sm:text-start text-neutral-950 font-cinzel">Design Philosophy</p>
          <p data-aos="fade-right" data-aos-delay="150" className="text-lg lg:text-xl text-center sm:text-start text-neutral-800 font-cinzel">A fusion of Swiss precision, Japanese durability, and futuristic smart technology.</p>
          <p data-aos="fade-right" data-aos-delay="170" className="text-xs sm:text-sm md:text-lg text-center sm:text-start text-neutral-700 ">Professionals, athletes, luxury collectors, and tech-savvy individuals</p>
        </div>
        <div data-aos="zoom-in" data-aos-delay="150" className="">
          <Image src={Img1} width={300} height={500} alt="hero" className="object-cover rounded-xl"/>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-4 px-2 py-4 mx-auto rounded-sm w-[75vw] max-w-[90%]">
        <div className="flex flex-col items-center justify-center">
          <p data-aos="zoom-in" className="text-4xl text-neutral-950 font-cinzel text-center">Shop Our Best Sellers</p>
          <p className="text-xl text-neutral-600 font-cinzel font-thin text-center">Affordable elegance, Luxury, Craftmanship, Durability and Functionality</p>
        </div>
        <div className=" w-[90%] flex flex-col items-center sm:grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-4 pl-8 mx-auto">
          {/* Card */}
          {products && (products as Product[]).map((product:Product) => {
            return <Card key={product.prodId} data={product}/>
          })}
        </div>
        <Link href="/products"><button className="px-4 sm:px-5 md:px-6 lg:px-7 xl:px-8 py-1 sm:py-2 shadow-neumorphism rounded-xl text-neutral-800 hover:bg-neutral-950 transition-all duration-500 hover:text-white hover:shadow-neumorphism sm:text-xl xl:text-2xl">All products</button></Link>
      </section>
      <section className="flex flex-col items-center justify-center gap-5 ">
        <div>
          <p className="text-2xl sm:text-4xl md:text-4xl lg:text-6xl xl:text-6xl text-neutral-950 font-cinzel text-center ">Explore Our InterStellar Collections</p>
        </div>
        <div data-aos-anchor-placement="top-center" className="w-[80%] flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-3.5 lg:gap-4 xl:gap-5">
          <Link href="heritage" data-aos="fade-left" data-aos-delay="100" data-aos-anchor-placement="top-center" className="w-full relative group ">
            <div className="w-full h-[10rem] relative">
            <Image src={Pic2}  alt="hero" className="w-full h-full object-cover"/>
            <div className="absolute right-10 top-10 z-10 flex flex-col items-end justify-center">
              <p className="text-4xl sm:text-6xl text-neutral-950 font-cinzel">Heritage</p>
              <p className="text-xs sm:text-lg text-neutral-950">Mechanical & Automatic Watches</p>
            </div>
            <div className="w-full h-full bg-neutral-950 absolute top-0 grid items-center justify-center transform transition-all duration-500 opacity-0 group-hover:opacity-70 invisible group-hover:visible z-[1002]">
              <p className="text-neutral-100 opacity-100 font-cinzel text-xl">View Collection</p>
            </div>
          </div>
          </Link>
          <Link href="/aeroSport" data-aos="fade-right" data-aos-delay="150" data-aos-anchor-placement="top-center" className="w-full relative group">
            <div className="w-full h-[10rem] relative">
            <Image src={Pic2}  alt="hero" className="w-full h-full object-cover"/>
            <div className="absolute left-10 top-10 z-10 flex flex-col items-start justify-center">
              <p className="text-4xl sm:text-6xl text-neutral-950 font-cinzel">AeroSport</p>
              <p className="text-xs sm:text-lg text-neutral-950">High-Performance Chronographs</p>
            </div>
            <div className="w-full h-full bg-neutral-950 absolute top-0 grid items-center justify-center transform transition-all duration-500 opacity-0 group-hover:opacity-70 invisible group-hover:visible z-[1002]">
              <p className="text-neutral-100 opacity-100 font-cinzel text-xl">View Collection</p>
            </div>
          </div>
          </Link>
          <Link href="novatech" data-aos="fade-left" data-aos-delay="200" data-aos-anchor-placement="top-center" className="w-full relative group">
            <div className="w-full h-[10rem] relative">
            <Image src={Pic2}  alt="hero" className="w-full h-full object-cover"/>
            <div className="absolute right-10 top-10 z-10 flex flex-col items-end justify-center">
              <p className="text-4xl sm:text-6xl text-neutral-950 font-cinzel">NovaTech</p>
              <p className="text-xs sm:text-lg text-neutral-950">Smart & Hybrid Watches</p>
            </div>
            <div className="w-full h-full bg-neutral-950 absolute top-0 grid items-center justify-center transform transition-all duration-500 opacity-0 group-hover:opacity-70 invisible group-hover:visible z-[1002]">
              <p className="text-neutral-100 opacity-100 font-cinzel text-xl">View Collection</p>
            </div>
          </div>
          </Link>
          <Link href="ventureX" data-aos="fade-right" data-aos-delay="250" data-aos-anchor-placement="top-center" className="w-full relative group">
            <div className="w-full h-[10rem] relative">
            <Image src={Pic2}  alt="hero" className="w-full h-full object-cover"/>
            <div className="absolute left-10 top-10 z-10 flex flex-col items-start justify-center">
              <p className="text-4xl sm:text-6xl text-neutral-950 font-cinzel">VentureX</p>
              <p className="text-xs sm:text-lg text-neutral-950">Rugged & Outdoor</p>
            </div>
            <div className="w-full h-full bg-neutral-950 absolute top-0 grid items-center justify-center transform transition-all duration-500 opacity-0 group-hover:opacity-70 invisible group-hover:visible z-[1002]">
              <p className="text-neutral-100 opacity-100 font-cinzel text-xl">View Collection</p>
            </div>
          </div>
          </Link>
          <Link href="celeste" data-aos="fade-left" data-aos-delay="300" data-aos-anchor-placement="top-center" className="w-full relative group">
            <div className="w-full h-[10rem] relative">
            <Image src={Pic2}  alt="hero" className="w-full h-full object-cover"/>
            <div className="absolute right-10 top-10 z-10 flex flex-col items-end justify-center">
              <p className="text-4xl sm:text-6xl text-neutral-950 font-cinzel">Celeste</p>
              <p className="text-xs sm:text-lg text-neutral-950">Womens Luxury</p>
            </div>
            <div className="w-full h-full bg-neutral-950 absolute top-0 grid items-center justify-center transform transition-all duration-500 opacity-0 group-hover:opacity-70 invisible group-hover:visible z-[1002]">
              <p className="text-neutral-100 opacity-100 font-cinzel text-xl">View Collection</p>
            </div>
          </div>
          </Link>
        </div>
      </section>
      <section className=" bg-neutral-950/50 mx-auto py-4 rounded-2xl w-[clamp(10rem,60vw,55rem)] backdrop-blur-lg">
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-6xl font-cinzel text-[#7209b7] "><CountUp start={0} end={15} suffix="%" enableScrollSpy={true} /></p>
          <p className="text-sm sm:text-lg xl:text-2xl text-center text-neutral-100 font-cinzel">Enjoy Premium discount on all Products Purchase above 200,000</p>
        </div>
      </section>
    </main>
  );
}