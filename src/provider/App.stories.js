import base from "paths.macro"
import React from 'react'
import App from "./App"

export default {
    title: `${base}App`,
    component: App
}

export const defaultApp = () => {

    return (<App />)
}
