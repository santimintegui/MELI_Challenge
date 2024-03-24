import searchLogo from "../assets/search.png";

function Input() {
  return (
    <div className="input-container">
      <input type="text" placeholder="Nunca deje de buscar" />
      <button>
        <img src={searchLogo} />
      </button>
    </div>
  );
}

export default Input;
