import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { startClock } from "../actions";
import Head from "next/head";
import {Navbar, Carousel} from "../components" 

const Index = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startClock());
  }, [dispatch]);

  return (
    <div>
      <Head>
        <title>Task1</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
        ></link>
      </Head>
      <Link href="Navbar">
        <Navbar>Navbar</Navbar>
      </Link>
      <Link href="Navbar">
        <Carousel>Carousel</Carousel>
      </Link>
    </div>
  );
};

export default Index;
