import React from "react";
import ProfileCard from "./ProfileCard";
import "./ProfileList.css";

function ProfileList({ students, onToggle }) {
  return (
    <section className="profile-list">
      {students.map((student) => (
        <ProfileCard
          key={student.id}
          student={student}
          onToggle={onToggle}
        />
      ))}
    </section>
  );
}

export default ProfileList;
