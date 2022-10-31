import { useState } from "react";
import axios from 'axios'

export function App() {
  const [locale, setLocale] = useState<string>("");
  const [infoLocale, setInfoLocale] = useState<object>({})

  return (
    <div className="">
      <form>
        <label>Cidade</label>
        <input
          type="text"
          className="border-black"
          onChange={(e) => setLocale(e.target.value)}
          placeholder="Digite uma localidade"
        />
        <button type="button" onClick={() => handleClickWeather()}>Enviar</button>
      </form>
    </div>
  );

  function handleClickWeather(){
    axios.get(`http://api.weatherapi.com/v1/current.json?key=b38973d27e114306810224449223010&q=${locale}`)
    .then((res) => setInfoLocale(res.data))
    console.log(infoLocale);
  }
}
