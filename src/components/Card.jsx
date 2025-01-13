import moment from "moment";
import React from "react";
import { WiDayHail } from "react-icons/wi";

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
                    <WiDayHail />30°C
                </h1>
                <p className=" fw-semibold">
                    {" "}Feels like 32°C. Clear sky. Light air{" "}
                </p>
                <p> 1.5m/s ENE</p>
                <p>Humidity:58%</p>
                <p>Dew point:21°C</p>
            </div>
        );
    }
};

export default Card;
