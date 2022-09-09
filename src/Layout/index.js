import { Outlet } from "react-router-dom";
import Counter from "../components/Counter";
import StyleNavBar from "../components/NavLinks/StyleNavBar";

export default function  SharedLayout(){
    return (
      <>
        <StyleNavBar/> 
        <Outlet/>
      </>
    );
  } 