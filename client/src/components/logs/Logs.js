import React from 'react'
import Home from '../home/home'
import "./Logs.scss"
import LogsForm from "./LogsForm.js"
import LogsData from "./LogsData.js"


function Logs() {
    return (
        <Home>
            <div className="logs">
                <div className="header">
                    <h1>Logs</h1>
                </div>
                
                {/* Form */}
                <div className="form">
                    <LogsForm />
                </div>

                {/* Data */}
                <div className="emp">
                    <LogsData />
                </div>
            </div>
        </Home>
    )
}

export default Logs
