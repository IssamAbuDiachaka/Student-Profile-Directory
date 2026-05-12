import React from "react";
import "./ProfileCard.css";

// Maps skill level to a CSS class for light-tinted badge styling
const skillClass = {
  Beginner: "skill--beginner",
  Intermediate: "skill--intermediate",
  Advanced: "skill--advanced",
};

function ProfileCard({ student, onToggle }) {
  const { id, name, track, bio, skillLevel, isActive } = student;

  return (
    <div className={`profile-card ${isActive ? "profile-card--active" : "profile-card--inactive"}`}>

      {/* Avatar — shows first letter of the student's name */}
      <div className="profile-card__avatar">
        {name.charAt(0).toUpperCase()}
      </div>

      <div className="profile-card__body">
        <h2 className="profile-card__name">{name}</h2>
        <p className="profile-card__track">{track}</p>
        <p className="profile-card__bio">{bio}</p>

        <div className="profile-card__meta">
          {/* Skill level badge */}
          <span className={`profile-card__skill ${skillClass[skillLevel] || ""}`}>
            {skillLevel}
          </span>

          {/* Conditional rendering — Active or Inactive status */}
          {isActive ? (
            <span className="profile-card__status profile-card__status--active">
              <span className="status-dot status-dot--active" />
              Active
            </span>
          ) : (
            <span className="profile-card__status profile-card__status--inactive">
              <span className="status-dot status-dot--inactive" />
              Inactive
            </span>
          )}
        </div>
      </div>

      {/* Button triggers the toggle function passed from the parent */}
      <button
        className={`profile-card__btn ${isActive ? "profile-card__btn--deactivate" : "profile-card__btn--activate"}`}
        onClick={() => onToggle(id)}
      >
        {isActive ? "Deactivate" : "Activate"}
      </button>
    </div>
  );
}

export default ProfileCard;
