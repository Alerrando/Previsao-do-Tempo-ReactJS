import { useState } from "react";
import axios from "axios";

export function App() {
  const [locale, setLocale] = useState<string>("");
  const [infoLocale, setInfoLocale] = useState<object>({});
  const [date, setDate] = useState(new Date());

  return (
    <main
      className={`h-screen w-full flex items-center justify-center ${bodyBackground()} bg-cover`}
    >
      <div>
        <form>
          <label>Cidade</label>
          <input
            type="text"
            className="border-black"
            onChange={(e) => setLocale(e.target.value)}
            placeholder="Digite uma localidade"
          />
          <button type="button" onClick={() => handleClickWeather()}>
            Enviar
          </button>
        </form>
      </div>
    </main>
  );

  function handleClickWeather() {
    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=b38973d27e114306810224449223010&q=${locale}&days=7&aqi=no&alerts=no`
      )
      .then((res) => setInfoLocale(res.data));
    console.log(infoLocale);
  }

  function bodyBackground() {
    const hora = date.getHours();
    if (hora >= 5 && hora <= 12) {
      return "bg-[url('Fundo/manha.jpg')]";
    } else if (hora > 12 && hora <= 17) {
      return "bg-[url('Fundo/tarde.jpg')]";
    } else {
      return "bg-[url('Fundo/noite.jpg')]";
    }
  }
}
