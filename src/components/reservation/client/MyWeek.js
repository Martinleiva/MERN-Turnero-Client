import React from 'react';
import { Navigate } from 'react-big-calendar';
import moment from 'moment';
import * as dates from 'date-arithmetic';
import TimeGrid from 'react-big-calendar/lib/TimeGrid';

const MyWeek = (props) => {

    const { date } = props;

    const setRange = date => {
        
        let start = date;
        let end = dates.add(start, 4, 'day');
          
        let current = start;
        let range = [];
          
        while (dates.lte(current, end, 'day')) {
    
            range.push(current);
    
            current = dates.add(current, 1, 'day');
        }
          
        return range;
    }  

    return (
        <TimeGrid {...props} range={setRange(date)} eventOffset={15} />
    )
}

MyWeek.navigate = (date, action) => {
        
    switch (action) {
        
        case Navigate.PREVIOUS:
            const dateNow = moment().toDate();
            if (date <= dateNow) {
                return;
            } else {
                return dates.add(date, -5, 'day');
            }

        case Navigate.NEXT:
            return dates.add(date, 5, 'day');
    
        default:
            return date;
    }
}

MyWeek.title = date => {

    let end = dates.add(date, 4, 'day');

    return `Semana desde el ${date.toLocaleDateString()} al ${end.toLocaleDateString()}`;

} 

export default MyWeek;