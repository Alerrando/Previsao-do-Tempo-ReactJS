type WeatherProps = {
    infoLocale:object
}

export function Weather(props:WeatherProps){
    const {infoLocale} = props;

    console.log(infoLocale)

    return(
        <>
            <div className="w-full h-auto">
                <h2 className="text-white">Hello World</h2>
            </div>
        </>
    )
}