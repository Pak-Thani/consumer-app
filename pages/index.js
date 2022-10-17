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
      <Link href="Navbar">
        <Carousel>Carousel</Carousel>
      </Link>
    </div>
  );
};

export default Index;
