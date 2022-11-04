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
        <div className="text-white grid md:h-32 w-full md:w-auto py-4 px-4 shadow-mini-modal">
          <div className="flex items-center md:grid gap-4 md:gap-0">
            <h2 className="text-xl md:text-2xl">{infoLocale.location.name}</h2>
            <div className="w-full flex items-center gap-2 md:gap-4">
              <span className="text-xs md:mr-1">{diaSemana[moment().format("E")]}</span>
              <span className="text-xs">{moment().format("HH:mm")}</span>
            </div>
          </div>
          <p className="text-sm">{infoLocale.current.condition.text}</p>
        </div>

        <div className="py-4 px-4 md:h-36 w-full md:w-40 shadow-mini-modal flex flex-col items-center justify-center">
          <img src={infoLocale.current.condition.icon} alt="" />
          <h2 className="text-white text-2xl">{`${infoLocale.current.temp_c}°`}</h2>
        </div>

      </div>

      <div className="h-full grid md:flex md:items-end md:justify-between">
        {infoLocale.forecast.forecastday.map((day:any, index:number) => (
          <>
            {index != 0 ? (
                <div className="shadow-lg">
                  <img src={day.day.condition.icon} alt="" />
                </div>
            ): null}
          </>
        ))}
      </div>
    </>
  );
}
