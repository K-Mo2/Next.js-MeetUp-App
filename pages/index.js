import React from "react";
import MeetupList from "../components/meetups/MeetupList.js";
import { MongoClient } from "mongodb";
import Head from "next/head";

export default function HomePage(props) {
  console.log(process.env.MONGO_ATLAS_CLIENT_API);
  return (
    <div>
      <Head>
        <title>Next.js Meetup App</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </div>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(process.env.MONGO_ATLAS_CLIENT_API);

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
