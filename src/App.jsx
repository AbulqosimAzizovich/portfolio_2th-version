import Header from "./components/Header/index";
import Layout from "./components/Layout/index";
import Footer from "./components/Footer/index";
import Loader from "./components/Loader/Loader";
import { useEffect, useState } from "react";
import { useTheme } from "./components/Theme";

const App = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  const [load, setLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoad(!load);
    }, 500);
  }, []);
  return (
    <div style={isDarkMode ? { background: "#030712" } : { background: "" }}>
      {load ? (
        <Loader />
      ) : (
        <>
          {" "}
          <Header /> <Layout /> <Footer />{" "}
        </>
      )}
    </div>
  );
};

export default App;
