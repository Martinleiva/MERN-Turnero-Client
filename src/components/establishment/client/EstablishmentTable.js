import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Toolbar,
  DateNavigator,
  Appointments,
  TodayButton,
  AppointmentTooltip,
  AppointmentForm,
} from '@devexpress/dx-react-scheduler-material-ui';

const appointments = [
    { 
        id: 0,
        title: 'Mail New Leads for Follow Up', 
        startDate: '2020-04-23T15:00',
        endDate: '2020-04-23T16:00' 
    },
    { 
        id: 1,
        title: 'Product Meeting', 
        startDate: '2020-04-23T18:00', 
        endDate: '2020-04-23T19:00' 
    },
    {
        id: 2,
        title: 'Send Territory Sales Breakdown', 
        startDate: '2020-04-23T21:00',
        endDate: '2020-04-23T22:00'
    },
  ];

const EstablishmentTable = () => {

    const [ currentDate, setCurrentDate ] = useState(Date.now());
    const [ data, setData ] = useState(appointments);
    const [ addedAppointment, setAddedAppointment ] = useState(appointments);

    const commitChanges = (added) => {
    
        if (added) {
            const startingAddedId = data.length > 0 
            ? 
                data[data.length - 1].id + 1 
            : 
                0;
    
            setData([...data, { 
                id: startingAddedId, 
                title:
                startDate: 
                
            }]);
        }

        console.log(added, data);
    }

    return (
        <Paper>
            <Scheduler
                data={data}
            >

                <ViewState
                    currentDate={currentDate}
                    onCurrentDateChange={(currentDate) => setCurrentDate(currentDate)}
                />

                <EditingState
                    onCommitChanges={commitChanges}

                    addedAppointment={addedAppointment}
                    onAddedAppointmentChange={(addedAppointment) => setAddedAppointment(addedAppointment)}
                />

                <WeekView
                    startDayHour={15}
                    endDayHour={24}
                    cellDuration={60}
                />

                <Toolbar />
                <DateNavigator />
                <TodayButton />
                
                <Appointments />

                <AppointmentTooltip
                    showCloseButton
                    showOpenButton
                />

                <AppointmentForm
                    
                />

            </Scheduler>
        </Paper>
    );
};

export default EstablishmentTable;
