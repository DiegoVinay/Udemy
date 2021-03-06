//npm run storybook



import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@mui/material/Grid'
import CityInfo from './../CityInfo'
import Weather from './../Weather'

// li: es un item (segun tag html, tiene el role "listitem")
// renderCityAndCountry se va a convertir en una funcion que retorna otra funcion
const renderCityAndCountry = eventOnClickCity => cityAndCountry => {
    const { city, country } = cityAndCountry

    return (
        <li key={city} onClick={eventOnClickCity} >
            <Grid container 
                justify="center"
                alignItems="flex-start"
            >
                <Grid item
                    md={8}
                    xs={12}>
                    <CityInfo city={city} country={country} />
                </Grid>
                <Grid item
                    md={4}
                    xs={12}>
                    <Weather temperature={10} state="sunny" />
                </Grid>
            </Grid>
        </li>
    )
}
// cities es un array, y en cada item tiene que tener la ciudad, pero ademas el country
// ul: tag html para listas no ordenadas
const CityList = ({ cities, onClickCity }) => {
    return (
        <ul>
            {
                cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry))
            }
        </ul>
    )
}

CityList.propTypes = {
    cities: PropTypes.array.isRequired,
    onClickCity: PropTypes.func.isRequired,
}

export default CityList