import { useState } from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/hero";
import BookForm from "./components/hotelbookcard/book_form";
import Navbar from "./components/navbar/Navbar";
import ServiceCard from "./components/service_card/Service_Card";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      {/* <BookForm /> */}
      <ServiceCard />
    </>
  );
}

export default App;
