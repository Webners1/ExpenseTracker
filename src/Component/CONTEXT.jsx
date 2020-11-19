import React, { Component,useContext } from 'react'

const ThingsContext = React.createContext({})
export const ThingsProvider = ThingsContext.Provider;
export default ThingsContext;