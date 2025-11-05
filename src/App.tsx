import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Trending from "./components/Trending";
import React, { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState({});
  const [movie, setmovie] = useState(null);
  useEffect(() => {
    fetch(
      "http://www.omdbapi.com/?i=tt3896198&apikey=4c512e2&movie=" + { movie }
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <Navbar></Navbar>
      <Trending></Trending>
      <Search></Search>
      <span className="m-5 text-2xl">Movies</span>
      <div className="justify-center w-full flex flex-wrap">
        <Card data={data}></Card>
        <Card data={data}></Card>
        <Card data={data}></Card>
        <Card data={data}></Card>
        <Card data={data}></Card>
        <Card data={data}></Card>
        <Card data={data}></Card>
        <Card data={data}></Card>
        <Card data={data}></Card>
        <Card data={data}></Card>
        <Card data={data}></Card>
        <Card data={data}></Card>
        <Card data={data}></Card>
        <Card data={data}></Card>
        <Card data={data}></Card>
        <Card data={data}></Card>
        <Card data={data}></Card>
        <Card data={data}></Card>
      </div>
    </>
  );
};

export default App;
