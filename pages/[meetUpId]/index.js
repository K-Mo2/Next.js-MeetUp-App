import React from "react";
import MeetupDetails from "../../components/meetups/MeetupDetails";

export default function meetupId() {
  return (
    <div>
      <MeetupDetails
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg"
        title="First Meetup"
        address="Some Street 5, Some City"
        description="This is a first meetup"
      />
    </div>
  );
}
