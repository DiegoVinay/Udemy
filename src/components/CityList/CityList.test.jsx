import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import CityList from './CityList' // SUT 
import '@testing-library/jest-dom/extend-expect'

const cities = [
    { city: "Santiago", country: "Chile"},
    { city: "Bogotá", country: "Colombia"},
    { city: "Buenos Aires", country: "Argentina"},
    { city: "Lima", country: "Perú"},
    { city: "Madrid", country: "España"},
    { city: "La Paz", country: "Bolivia"},,
]

test("CityList renders", async () => {
    // AAA Arrange Act Assert

    const { findAllByRole } = render(<CityList cities={cities} />)

    const items = await findAllByRole("listitem")

    expect(items).toHaveLength(6)
})


test("CityList click on item", async () => {
    // Debemos simular una accion del usuario: click sobre un item
    // Para eso vamos a utilizar una funcion "MOCK"

    const fnClickOnItem = jest.fn()

    const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnItem} />)

    const items = await findAllByRole("listitem")

    // Ahora para simular la accion, vamos a utilizar fireEvent
    // fireEvent es parte de la libreria testing-library/react

    fireEvent.click(items[0])

    // ¿Ahora que tuvo que suceder?
    // Se debio llamar a la funcion fnClickOnItem UNA unica vez

    expect(fnClickOnItem).toHaveBeenCalledTimes(1)

    // Esta funcion hace que sea llamado UNA unica vez


})