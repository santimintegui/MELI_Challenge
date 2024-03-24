import { useState } from "react";
import MeliLogo from "../assets/logo_ML.png";
import Input from "./Input";
import { useNavigate } from "react-router-dom";

export function Layout({ children }: any) {
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();

    if (value === "") return;

    navigate(`/items?search=${value}`);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="banner-container">
          <img src={MeliLogo} height={40} />
          <Input value={value} handleChange={setValue} />
        </div>
      </form>
      <div className="children-container">{children}</div>
    </>
  );
}
