import moment from "moment";


type WeatherProps = {
  infoLocale: any;
};

export function Weather(props: WeatherProps) {
  const { infoLocale } = props;
  const diaSemana:any = ["", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sabádo", "Domingo"];

  console.log(infoLocale.current.condition)
  console.log(infoLocale);

  return (
    <>
      <div className="w-full md:h-full block md:flex md:items-center md:justify-between">
        <div className="grid gap-2 md:h-28 w-full md:w-auto font-sans py-4 px-4 shadow-mini-modal">
          <div className="grid gap-2">
            <div className="w-full md:w-auto md:flex items-center justify-between gap-7 md:gap-10">
              <h2 className="text-xl md:text-xl">{`${infoLocale.location.name} - ${infoLocale.location.country}`}</h2>
            </div>
            <div className="w-full flex items-center justify-between">
              <span className="text-base">{moment().format("HH:mm")}</span>
            </div>
          </div>
          <p className="text-base">{infoLocale.current.condition.text}</p>
        </div>

        <div className="py-4 px-4 md:h-28 w-full md:w-40 shadow-mini-modal flex flex-col items-center justify-center">
          <img className="w-18 h-18 bg-cover" src={infoLocale.current.condition.icon} alt={infoLocale.current.condition.text} />
          <div className="w-full flex items-center justify-between">
            <h2>{diaSemana[moment().format("E")]}</h2>
            <h2 className="text-base">{`${infoLocale.current.temp_c}°`}</h2>
          </div>
        </div>
      </div>

      <div className="grid gap-2 md:flex items-center justify-between mt-4 md:mt-6 md:mb-1">
        <p className="">{`Humidade: ${infoLocale.current.humidity}%`}</p>
        <p className="">{`Vento: ${infoLocale.current.wind_kph}km/h`}</p>
        <p className="">{`Sensação termica: ${infoLocale.current.feelslike_c}°`}</p>
      </div>

      <div className="h-[95%] grid md:flex md:items-end md:justify-between">
        {infoLocale.forecast.forecastday.map((day:any, index:number) => (
          <>
            {index != 0 ? (
                <div className="w-auto md:block flex items-center justify-between text-center shadow-lg" key={index}>
                  <img className="md:mx-auto" src={day.day.condition.icon} alt={day.day.condition.text} />
                  <div className="block pr-4 md:pr-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs opacity-50 pr-2">{`${day.day.maxtemp_c}°`}</span>
                      <span className="text-xs">{`${day.day.mintemp_c}°`}</span>
                    </div>
                    <p className="text-xs">{diaSemana[moment(day.date).format("E")]}</p>
                  </div>
                </div>
            ): null}
          </>
        ))}
      </div>
    </>
  );
}
