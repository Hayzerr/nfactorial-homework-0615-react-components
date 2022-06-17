import { useState } from "react";
import { DefaultContext } from "./Context";

//импортируем стили
import "./App.css";

import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Content } from "./components/content";


export default function App() {
  const [fan, setFan] = useState("");
  const [DarkMode, setDarkMode] = useState("dark")
  const handleCreateFan = ({ name }) => {
    setFan(name);
  };
  const handleChange = () => {
    if(DarkMode === "white"){
      setDarkMode("dark");
    }
    else{
      setDarkMode("white");
    }
    console.log(DarkMode);
  }
  return (
    <DefaultContext.Provider value={{ handleCreateFan, handleChange }}>
        <Header fan={fan} DarkMode = {DarkMode}/>
        <hr />
        <Content DarkMode = {DarkMode}/>
        <Footer />
      </DefaultContext.Provider>
  );
}
