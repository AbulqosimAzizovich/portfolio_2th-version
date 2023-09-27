import Header from "./components/Header/index";
import Layout from "./components/Layout/index";
import Footer from "./components/Footer/index";
import Loader from "./components/Loader/Loader";
import { useEffect, useState } from "react";

const App = () => {

  const [load, setLoad] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoad(!load)
    }, 2000)
  }, []);
  return (
    <>
      {load ? <Loader /> : <> <Header/> <Layout/> <Footer /> </>}
    </>
  );
};

export default App;
