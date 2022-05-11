import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@mui/material/Grid'
import ForecastItem from './../ForecastItem'
import { validValues } from './../IconState'

const renderForecastItem = forecast => {
    const { weekDay, hour, state, temperature } = forecast
    // Hay que poner un identificador unico
    // vamos a poner una "marca" para encontrar cada item (ForecastItem)
    return (
        <Grid 
            data-testid="forecast-item-container" 
            item key={`${weekDay}${hour}`}>
            <ForecastItem 
                hour={hour}
                weekDay={weekDay}
                state={state}
                temperature={temperature}
            ></ForecastItem>
        </Grid>
    )
}
const Forecast = ({ forecastItemList }) => {
    return (
        <Grid container
            justify="center"
            alignItems="center">
            {
                forecastItemList.map(forecast => renderForecastItem(forecast))
            }
        </Grid>
    )
}

// forecastItemList es un array de elementos
// los elementos deben tener una "forma" en particular 
// las siguientes propiedades
/*
    weekDay: PropTypes.string.isRequired, // ptsn
    hour: PropTypes.number.isRequired, // ptnr
    state: PropTypes.oneOf(validValues).isRequired,
    temperature: PropTypes.number.isRequired 
*/


Forecast.propTypes = {
    forecastItemList: PropTypes.shape({
        weekDay: PropTypes.string.isRequired, //ptsn
        hour: PropTypes.number.isRequired, // ptnr
        state: PropTypes.oneOf(validValues).isRequired,
        temperature: PropTypes.number.isRequired,        
    }).isRequired, // ptar para validar que es un array
                   // ptshr se valida mejor 
}

export default Forecast
