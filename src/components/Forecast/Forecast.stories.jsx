import React from 'react'
import Forecast from './Forecast'

export default {
    title: "Forecast",
    component: Forecast
}

const forecastItemList = [
	{ hour: 18, state:"sunny", temperature:17, weekDay:"Jueves" },
	{ hour: 6, state:"cloud", temperature:18, weekDay:"Viernes" },
	{ hour: 12, state:"fog", temperature:13, weekDay:"Sábado" },
	{ hour: 13, state:"cloudy", temperature:11, weekDay:"Domingo" },
	{ hour: 11, state:"rain", temperature:8, weekDay:"Lunes" },
	{ hour: 7, state:"rain", temperature:4, weekDay:"Martes" }, 
]

export const ForecastExample = () => (<Forecast forecastItemList={forecastItemList} />)