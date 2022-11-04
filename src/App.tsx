import { useEffect, useState } from "react";
import axios from "axios";
import { Weather } from "./components/Weather";

export function App() {
  const [locale, setLocale] = useState<string>("");
  const [infoLocale, setInfoLocale] = useState<any>({});
  let date = new Date();
  let background:string = bodyBackground();

  return (
    <main className="h-screen w-screen flex items-center justify-center bg-cover">
      <img src={background} className="absolute z-0 w-screen h-screen object-cover" alt={`imagem ${background}`} />
      <div className="w-[75%] md:w-5/12 h-3/5 bg-zinc-600 z-50 overflow-y-auto md:overflow-y-hidden">
        <div className="w-full h-auto my-8 pl-6 md:px-6">
          <header className="grid gap-4 md:gap-0 w-[90%] md:w-[98%] md:flex md:items-center md:justify-between">
            <input
              type="text"
              className="w-full md:w-[80%] text-white border-b-white border-solid border-b-2 bg-transparent outline-none"
              onChange={(e) => setLocale(e.target.value)}
              placeholder="Digite uma localidade"
            />
            <button type="button" className="bg-green-500 text-white group py-1 px-4 rounded-md opacity-80 hover:opacity-100" onClick={() => handleClickWeather()}>
              Enviar
            </button>
          </header>

          <section className="w-[90%] grid gap-8 md:block h-full md:h-auto md:w-full mt-8 text-white">
            {Object.keys(infoLocale).length !== 0 ? (
              <Weather infoLocale={infoLocale} />
            ): null}
          </section>
        </div>
      </div>
    </main>
  );

  function handleClickWeather() {
    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=b38973d27e114306810224449223010&q=${locale}&days=7&aqi=no&alerts=no&lang=pt`
      )
      .then((res) => setInfoLocale(res.data))
      .catch((err) => alert("Local não encontrado/não existe"));
    console.log(infoLocale);
  }

  function bodyBackground() {
    const hora = date.getHours();
    if (hora >= 5 && hora <= 12) {
      return "manha.jpg";
    } else if (hora > 12 && hora <= 17) {
      return "tarde.jpg";
    } else {
      return "noite.jpg";
    }
  }
}