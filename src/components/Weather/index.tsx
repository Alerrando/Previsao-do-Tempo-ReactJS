import moment from "moment";


type WeatherProps = {
  infoLocale: object;
  locale:string
};

export function Weather(props: WeatherProps) {
  const { infoLocale, locale } = props;
  const diaSemana:any = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sabádo"];

  console.log(moment().format("dddd"))
  console.log(infoLocale);

  return (
    <div className="flex items-center flex-1 text-white">
      <div className="grid gap-1">
        <h2 className="text-2xl">{locale}</h2>
        <div className="w-full flex items-center justify-between gap-4">
          <span>{diaSemana[moment().format("E")]}</span>
          <span>{moment().format("HH:mm:ss")}</span>
        </div>
      </div>
    </div>
  );
}
