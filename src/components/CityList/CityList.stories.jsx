import React from 'react'
import CityList from './CityList'
import { action } from '@storybook/addon-actions'

export default {
    title: "CityList",
    component: CityList
}

const cities = [
    { city: "Santiago", country: "Chile"},
    { city: "Bogotá", country: "Colombia"},
    { city: "Buenos Aires", country: "Argentina"},
    { city: "Lima", country: "Perú"},
    { city: "Madrid", country: "España"},
    { city: "La Paz", country: "Bolivia"},,
]

export const CityListExample = () => <CityList cities={cities} onClickCity={action("Click en city")} />



