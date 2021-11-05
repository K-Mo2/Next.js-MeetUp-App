import React from 'react'
import MeetupList from "../components/meetups/MeetupList.js"

const DUMMY_MEETUPS =[
    {id:'m1',
    image:"https://picsum.photos/seed/picsum/100/100",
    title:"Some title",
    address:'Some Adress',
    },
    {id:'m2',
    image:"https://picsum.photos/seed/picsum/100/100",
    title:"Some title",
    address:'Some Adress',
    }
]
export default function HomePage() {
    
    return (
        <div>
            <MeetupList meetups={DUMMY_MEETUPS}/> 
        </div>
    )
}
