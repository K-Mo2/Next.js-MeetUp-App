import { ObjectId } from "bson";
import React from "react";
import MeetupDetails from "../../components/meetups/MeetupDetails";

export default function meetupId(props) {
  return (
    <div>
      <MeetupDetails
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </div>
  );
}

export async function getStaticPath() {
  const client = await MongoClient.connect(
    "mongodb+srv://new-user31:YhuJMcKoDHzFzpl0@cluster0.rltnc.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStateicProps(context) {
  const client = await MongoClient.connect(
    "mongodb+srv://new-user31:YhuJMcKoDHzFzpl0@cluster0.rltnc.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });

  client.close();

  const meetupId = context.param.meetUpId;
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}
