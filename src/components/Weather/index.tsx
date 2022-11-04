import moment from "moment";


type WeatherProps = {
  infoLocale: any;
};

export function Weather(props: WeatherProps) {
  const { infoLocale } = props;
  const diaSemana:any = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sabádo"];

  console.log(infoLocale.current.condition)
  console.log(infoLocale);

  return (
    <>
      <div className="w-full md:h-full block md:flex md:items-center md:justify-between">
        <div className="grid gap-2 md:h-32 w-full md:w-auto font-sans py-4 px-4 shadow-mini-modal">
          <div className="block md:grid gap-4 md:gap-0">
            <div className="w-full md:w-auto flex items-center justify-between gap-7 md:gap-10">
              <h2 className="text-xl md:text-2xl">{infoLocale.location.name}</h2>
              <h2 className="text-2xl">{`${infoLocale.current.temp_c}°`}</h2>
            </div>
            <div className="w-full flex items-center justify-between">
              <span className="text-sm md:mr-1">{diaSemana[moment().format("E")]}</span>
              <span className="text-sm">{moment().format("HH:mm")}</span>
            </div>
          </div>
          <p className="text-sm">{infoLocale.current.condition.text}</p>
        </div>

        <div className="py-4 px-4 md:h-36 w-full md:w-40 shadow-mini-modal flex flex-col items-center justify-center">
          <img className="w-28 h-28 bg-cover" src={infoLocale.current.condition.icon} alt={infoLocale.current.condition.text} />
        </div>
      </div>

      <div className="grid gap-2 md:flex items-center justify-between mt-4 md:mt-6 md:mb-4">
        <p className="">{`Humidade: ${infoLocale.current.humidity}%`}</p>
        <p className="">{`Vento: ${infoLocale.current.wind_kph}km/h`}</p>
        <p className="">{`Sensação termica: ${infoLocale.current.feelslike_c}°`}</p>
      </div>

      <div className="h-[95%] grid md:flex md:items-end md:justify-between">
        {infoLocale.forecast.forecastday.map((day:any, index:number) => (
          <>
            {index != 0 ? (
                <div className="w-auto md:block flex text-center shadow-lg" key={index}>
                  <img className="mx-auto" src={day.day.condition.icon} alt={day.day.condition.text} />
                  <div className="flex items-center justify-between">
                    <span className="opacity-50 pr-2">{`${day.day.maxtemp_c}°`}</span>
                    <span>{`${day.day.mintemp_c}°`}</span>
                  </div>
                </div>
            ): null}
          </>
        ))}
      </div>
    </>
  );
}
