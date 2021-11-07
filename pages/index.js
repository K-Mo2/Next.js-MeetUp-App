import React from "react";
import MeetupList from "../components/meetups/MeetupList.js";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    title: "Some title",
    address: "Some Adress",
  },
  {
    id: "m2",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    title: "Some title",
    address: "Some Adress",
  },
];
export default function HomePage() {
  return (
    <div>
      <MeetupList meetups={DUMMY_MEETUPS} />
    </div>
  );
}
