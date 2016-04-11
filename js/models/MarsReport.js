function MarsReport(terrestrial_date, sol, ls, min_temp, min_temp_fahrenheit, max_temp, max_temp_fahrenheit,
    pressure, pressure_string, abs_humidity, wind_speed, wind_direction, atmo_opacity, season, sunrise, sunset ){
    this.terrestrialDate = terrestrial_date;
    this.sol = sol;
    this.ls = ls;
    this.minTemp = min_temp;
    this.minTempFahrenheit = min_temp_fahrenheit;
    this.maxTemp = max_temp;
    this.maxTempFahrenheit = max_temp_fahrenheit;
    this.pressure = pressure;
    this.pressureString = pressure_string;
    this.absHumidity = abs_humidity;
    this.windDirection = wind_direction;
    this.windSpeed = wind_speed;
    this.atmoOpacity = atmo_opacity;
    this.season = season;
    this.sunrise = sunrise;
    this.sunset = sunset;
}