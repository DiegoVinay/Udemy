import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'
import { IconContext } from 'react-icons'
import IconState, { validValues } from '../IconState/IconState'

/* DISTINTAS FORMAS VIDEO N° 140 
 
let Icon = stateByName[state] !== undefined ? stateByName[state] : stateByName["sunny"]
 
return <Icon />
}


switch (state) {
  case "cloud": {
    const Icon = stateByName["cloud"]
    return <Icon />
  }
  case "cloudy": {
    const Icon = stateByName["cloudy"]
    return <Icon />
  }
  case "fog": {
    const Icon = stateByName["fog"]
    return <Icon />
  }
  case "sunny": {
    const Icon = stateByName["sunny"]
    return <Icon />
  }
  case "rain": {
    const Icon = stateByName["rain"]
    return <Icon />
  }
  default:
    const Icon = stateByName["sunny"]
    return <Icon />
}

if (state === "cloud") {
  return <WiCloud />
} else if (state === "cloudy") {

} else if (state === "fog") {
  
} else if (state === "sunny") {
  
} else if (state === "rain") {
  
}
 
switch (state) {
  case "cloud":
    return <stateByName.cloud />
  case "cloudy":
    return <stateByName.cloudy />
  case "fog":
    return <stateByName.fog />
  case "sunny":
    return <stateByName.sunny />
    case "rain":
    return <stateByName.rain />
  default:
    return <stateByName.sunny />
}*/


const Weather = ({ temperature, state }) => {
  return (
    <div>
      <IconContext.Provider value={{ size: '5em' }}>
        <IconState state={state} />
      </IconContext.Provider>
      <Typography display="inline" variant="h3">{temperature}</Typography>
    </div>
  )
}

Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
  state: PropTypes.oneOf([validValues]).isRequired,
}

export default Weather