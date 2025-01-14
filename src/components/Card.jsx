/* eslint-disable react/prop-types */
import moment from "moment";

const Card = ({ data }) => {
    console.log(data);

    if (JSON.stringify(data) !== "{}") {
        return (
            <div className="text-center">
                <p className=" fw-light text-danger">
                    {moment().utcOffset(data.sys.timezone / 60).format('MMM DD, hh:mma')}
                </p>
                <h3 className="fw-bold ">
                    {data.name}, {data.sys.country}
                </h3>
                <h1 className="">
                    <img src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}/>{(data.main.temp - 273.15).toFixed(2)}°C
                </h1>
                <p className=" fw-semibold">
                    Feels like {data.main.feels_like}°C.{data.weather[0].description}.
                </p>
                <p>Humidity : {data.main.humidity}%</p>
                <p>Visibility : {data.visibility / 1000}km</p>
            </div>
        );
    }else{
        return (
            <h3 className="text-center">Loading...</h3>
        )
    }
};

export default Card;
