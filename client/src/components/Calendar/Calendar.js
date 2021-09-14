import React from "react";
import Calendar from 'react-calendar';
import { useState } from "react";
import './Calendar.css';

export const ReactCalendar = () => {


    const [date, setDate] = useState(new Date());

    const onChange = () => {
        setDate(date);
    }

    return (

        <div className='calendar'>

            <Calendar locale='pt-br' onChange={onChange} value={date} />

        </div>

    );
}

export default ReactCalendar