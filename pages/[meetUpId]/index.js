import React from "react";
import MeetupDetails from "../../components/meetups/MeetupDetails";

export default function meetupId(props) {
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

export async function getStaticPath() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetUpId: "m1",
        },
      },
      {
        params: {
          meetUpId: "m2",
        },
      },
    ],
  };
}

export async function getStateicProps(context) {
  const meetupId = context.param.meetUpId;
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
        title: "First Meetup",
        address: "Some Street 5, Some City",
        description: "This is a first meetup",
      },
    },
  };
}
