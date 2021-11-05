import React from 'react'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'

export default function NewMeetUp() {
    
    const addMeetUp = function (enteredData) {
        console.log(enteredData);
    }
    return (
        <div>
            <NewMeetupForm onAddMeetup={addMeetUp}/>
        </div>
    )
}
