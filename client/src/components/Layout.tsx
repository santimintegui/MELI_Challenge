import MeliLogo from "../assets/logo_ML.png";
import Input from "./Input";

export function Layout({ children }: any) {
  return (
    <div>
      <div className="banner-container">
        <img src={MeliLogo} height={40} />
        <Input />
      </div>
      <div>{children}</div>
    </div>
  );
}
