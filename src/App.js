import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";

const locales = {
    "pt-BR": require("date-fns/locale/pt-BR"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
    {
        title: "Reserva",
        allDay: true,
        start: new Date(0,6,2021),
        end: new Date(0,6,2021),
    },
    /*{
        title: "Reunião",
        start: new Date(2021, 6, 7),
        end: new Date(2021, 6, 10),
    },*/
];

function App() {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent]);
    }

    return (
        <div className="App">
            <h1>Reservas FCamara</h1>
            <h2>Escritório São Paulo</h2>
            <div>
                <select>
                    <option className="sel-opt" value="estacao">Estação de Trabalho</option>
                    <option value="reuniao">Reunião</option>
                </select> 

                
                <DatePicker placeholderText="Início" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                <DatePicker placeholderText="Término" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                <button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
                    Reservar
                </button>
            </div>
            <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
        </div>
    );
}

export default App;