import { ChangeEventHandler } from "react";
import searchLogo from "../../assets/search.png";

type InputProps = {
  value: string;
  handleChange: React.Dispatch<React.SetStateAction<string>>;
};

function Input({ value, handleChange }: InputProps) {
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    handleChange(event.target.value);
  };

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Nunca deje de buscar"
        value={value}
        onChange={handleInputChange}
      />
      <button type="submit">
        <img src={searchLogo} />
      </button>
    </div>
  );
}

export default Input;
