import React from "react";
import "./ProfileCard.css";

// Maps skill level string to a CSS modifier class
const skillBadgeClass = {
  Beginner: "beginner",
  Intermediate: "intermediate",
  Advanced: "advanced",
};

function ProfileCard({ student, onToggle }) {
  const { id, name, track, bio, skillLevel, isActive } = student;

  return (
    <div className={`card ${isActive ? "" : "inactive"}`}>

      {/* Avatar — first letter of the student's name */}
      <div className="avatar">
        {name.charAt(0).toUpperCase()}
      </div>

      <div className="info">
        <h2 className="name">{name}</h2>
        <p className="track">{track}</p>
        <p className="bio">{bio}</p>

        <div className="meta">
          {/* Skill level badge */}
          <span className={`badge ${skillBadgeClass[skillLevel]}`}>
            {skillLevel}
          </span>

          {/* Conditional rendering — Active or Inactive */}
          {isActive ? (
            <span className="status active">
              <span className="dot active" />
              Active
            </span>
          ) : (
            <span className="status inactive">
              <span className="dot inactive" />
              Inactive
            </span>
          )}
        </div>
      </div>

      {/* Button — calls the toggle function passed from the parent */}
      <button
        className={`btn ${isActive ? "deactivate" : "activate"}`}
        onClick={() => onToggle(id)}
      >
        {isActive ? "Deactivate" : "Activate"}
      </button>
    </div>
  );
}

export default ProfileCard;
