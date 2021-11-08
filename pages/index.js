import React from "react";
import MeetupList from "../components/meetups/MeetupList.js";
import { MongoClient } from "mongodb";

export default function HomePage(props) {
  return (
    <div>
      <MeetupList meetups={props.meetups} />
    </div>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://new-user31:YhuJMcKoDHzFzpl0@cluster0.rltnc.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}
