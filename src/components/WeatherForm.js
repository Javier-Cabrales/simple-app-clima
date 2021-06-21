import React from 'react'

function WeatherForm(props) {
    return (
        <div className="card card-body">
            <form onSubmit={props.getWeather}>
                <div className="form-group p-1">
                    <input type="text" name="city" placeholder="Your City Name" className="form-control" autoFocus/>
                </div>
                <div className="form-group p-1">
                    <input type="text" name="country" placeholder="Your Contry Name" className="form-control"/>
                </div>
                <button className="btn btn-success w-100 mt-1">Get Weather</button>
            </form>
        </div>
    )
}

export default WeatherForm
