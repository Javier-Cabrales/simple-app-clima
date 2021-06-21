import React from 'react'

function WeatherInfo({ temperature, description, humidity, wind_speed, city, country, error }) {

    return (
        <div>
            {
                error &&
                <div className="alert alert-danger">
                    <p>{error}</p>
                </div>
            }
            {
                temperature ?
                    <div className="card card-body">
                        Temperatura: <p>{temperature}</p>
                        Descripcion: <p>{description}</p>
                        Humedad:     <p>{humidity}</p>
                        Velocidad del viento: <p>{wind_speed}</p>
                        Ciudad:      <p>{city}</p>
                        Country:     <p>{country}</p>
                    </div>
                    :
                    <div className="card card-body text-center bg-dark">
                        <p>No hay informacion en el formulario</p>
                    </div>
            }

        </div>
    )
}

export default WeatherInfo
