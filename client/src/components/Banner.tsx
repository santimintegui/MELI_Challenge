import { useState } from "react";
import MeliLogo from "../assets/logo_ML.png";
import Input from "./common/Input";
import { useLocation, useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const searchParams = search.split("=")[1];
  const [value, setValue] = useState(searchParams ?? "");

  function handleSubmit(e: any) {
    e.preventDefault();

    if (value === "") return;

    navigate(`/items?search=${value}`);
  }

  function goHome() {
    setValue("");
    navigate("/");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="banner-container">
          <img
            src={MeliLogo}
            height={40}
            onClick={goHome}
            alt="Mercado Libre Logo"
          />
          <Input value={value} handleChange={setValue} />
        </div>
      </form>
    </div>
  );
}

export default Banner;
