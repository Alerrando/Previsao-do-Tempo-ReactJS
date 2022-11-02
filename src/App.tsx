import { useEffect, useState } from "react";
import axios from "axios";
import { Weather } from "./components/Weather";

export function App() {
  const [locale, setLocale] = useState<string>("");
  const [infoLocale, setInfoLocale] = useState<object>({});
  let date = new Date();
  let background:string = bodyBackground();

  return (
    <main className={`h-screen w-full flex items-center justify-center bg-cover`}>
      <img src={background} className="absolute z-0 w-full h-full object-cover" alt="" />
      <div className="w-[60%] md:w-5/12 h-3/5 bg-zinc-600 z-50">
        <div className="w-full h-full my-8 mx-8">
          <header className="grid gap-4 md:gap-0 md:w-[90%] md:flex md:items-center justify-between">
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

          <section className="w-full h-auto pt-4">
            {Object.keys(infoLocale).length !== 0 ? (
              <Weather infoLocale={infoLocale} locale={locale} />
            ): null}
          </section>
        </div>
      </div>
    </main>
  );

  function handleClickWeather() {
    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=b38973d27e114306810224449223010&q=${locale}&days=7&aqi=no&alerts=no`
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