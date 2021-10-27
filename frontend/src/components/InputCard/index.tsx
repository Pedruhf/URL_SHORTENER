import axios from "axios";
import { useContext, useState } from "react";
import { UrlContext } from "../../contexts/urls";

import "./styles.scss";

const InputCard = () => {
  const { handleCreateURL } = useContext(UrlContext);
  const [inputValue, setInputValue] = useState("");

  async function handleInput() {
    handleCreateURL(inputValue);

    setInputValue("");
  }

  return (
    <div className="inputCard">
      <input
        type="text"
        name="url"
        placeholder="Digite a URL que deseja encurtar..."
        value={inputValue}
        onChange={event => { setInputValue(event.target.value) }}
      />

      <button onClick={handleInput}>Encurtar</button>
    </div>
  );
};

export { InputCard };