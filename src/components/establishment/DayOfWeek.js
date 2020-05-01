import React, { useState, useEffect } from 'react';

const DayOfWeen = ({day, fnSetTimes, value}) => {
    
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

    useEffect(()=>{
        //10:00 - 23:59
        if(value !== ''){
            const data = value.split('-');                        
            if(data.length === 2){                
                setTimes({
                    start : data[0],
                    end : data[1]
                });                               
            }            
        } else{
            setTimes({
                start : '',
                end : ''
            });
        }
    }, [value]);

    return (  
        <div className="form-group col-md-4 border border-secondary">
            <h5 className="text-center border border-secondary mt-1">{day}</h5>
            <div className="form-row">
                <div className="form-group col-md-6 div-times"> 
                    <p>Abre</p>                   
                    <input type="time" 
                        className="form-control font-weight-bold input-times"                        
                        name="start"
                        value={times.start}
                        onChange={handleTimes}
                    />                                                                    
                </div>
                <div className="form-group col-md-6 div-times">
                    <p>Cierra</p>
                    <input type="time" 
                        className="form-control font-weight-bold input-times"                        
                        name="end"
                        value={times.end}
                        onChange={handleTimes}
                    />
                </div> 
            </div>                                                           
        </div>
    );
}
 
export default DayOfWeen;