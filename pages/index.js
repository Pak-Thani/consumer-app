import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { startClock } from "../actions";
import Head from "next/head";
import Nav from "../components/Nav";
import Caraousel from "../components/Carousel";

const Index = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startClock());
  }, [dispatch]);

  return (
    <>
      <Link href="/home">
        <a>Click to see Home</a>
      </Link>
      <br></br>
      <Link href="/show-redux-state">
        <a>Click to see current Redux State</a>
      </Link>
      <div>
        <Head>
          <title>Task1</title>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
          ></link>
        </Head>
        <Link href="Navbar">
          <Nav>Navbar</Nav>
        </Link>
        <Link href="Navbar">
          <Caraousel>Carousel</Caraousel>
        </Link>
      </div>
    </>
  );
};

export default Index;
