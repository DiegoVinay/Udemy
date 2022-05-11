import React from 'react'
import { render } from '@testing-library/react'
import CityInfo from './CityInfo' // SUT: Subject under testing (objeto del testeo)



    // AAA
    // Arrange   ( todo para ejecutar algo )
    // Act       ( ejecutamos el test )
    // Assert    ( evaluamos lo que sucedio, si es exitoso (passed) si no (failed) )

    test("CityInfo render", async () => {
        // AAA
        // Arrange 
        // Act
        const city = "Santiago"
        const country = "Chile"
    
        // Render: renderiza el componente y retorna una serie de funciones de utilidad
        // En este caso utilizamos "findAllByRole" para "consultar" a nuestro componente
        // Vamos a analizar su estado en el "Assert"
        const { findAllByRole } = render(<CityInfo city={city} country={country} />)
    
        // Assert
        // findAllByRole permite encontrar todos los componentes seleccionados por un determinado rol
        // findAllByRole nos va a buscar (en este caso) todos los componentes que sean 
        // "heading" => H1, H2, H3.. etc
        // El resultado es un array de componentes (cityAndCountryComponents)
        const cityAndCountryComponents = await findAllByRole("heading")
    
        // ¿Cuando el test va a ser correcto?
        // DEfinición: 
        // Cuando en el primer elemento (heading) se encuentre la ciudad "Santiago"
        // y cuando en el segundo elemento se encuentre el pais Chilr
    
        expect(cityAndCountryComponents[0]).toHaveTextContent(city)
        expect(cityAndCountryComponents[1]).toHaveTextContent(country)
    
        //.toHaveTextContent es una comparacion donde debe tener un contenido en formato text igual a "Santiago"
        // Si estas condiciones se cumplen (expect), el test esta "ok"
    })