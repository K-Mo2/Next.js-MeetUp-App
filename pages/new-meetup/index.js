import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";

export default function NewMeetUp() {
  const router = useRouter();

  const addMeetUp = async function (enteredData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    console.log(result);

    router.push("/");
  };
  return (
    <div>
      <NewMeetupForm onAddMeetup={addMeetUp} />
    </div>
  );
}
