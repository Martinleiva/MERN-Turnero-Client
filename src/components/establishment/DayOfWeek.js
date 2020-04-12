import React, { useState, useEffect } from 'react';

const DayOfWeen = ({day, fnSetTimes}) => {
    
    const [times, setTimes] = useState({
        start : '',
        end : ''
    });

    const handleTimes = e => {
        setTimes({
            ...times,
            [e.target.name] : e.target.value
        });                        
    }

    useEffect(()=> {
        if(times.start !== '' && times.end !== ''){
            fnSetTimes(`${times.start}-${times.end}`); 
        }        
    }, [times]);

    return (  
        <div className="form-group col-md-4 border border-secondary">
            <h5 className="text-center border border-secondary mt-1">{day}</h5>
            <div className="form-row">
                <div className="form-group col-md-6 div-times"> 
                    <p>Abre</p>                   
                    <input type="time" 
                        className="form-control font-weight-bold input-times"                        
                        name="start"
                        onChange={handleTimes}
                    />                                                                    
                </div>
                <div className="form-group col-md-6 div-times">
                    <p>Cierra</p>
                    <input type="time" 
                        className="form-control font-weight-bold input-times"                        
                        name="end"
                        onChange={handleTimes}
                    />
                </div> 
            </div>                                                           
        </div>
    );
}
 
export default DayOfWeen;