import React, { useState } from "react";
import Header from "./components/Header";
import ProfileList from "./components/ProfileList";
import Footer from "./components/Footer";
import "./App.css";

// Initial student data — stored in state so it can be updated
const initialStudents = [
  {
    id: 1,
    name: "Amina",
    track: "Frontend Development",
    bio: "Passionate about building beautiful, accessible user interfaces with React.",
    skillLevel: "Beginner",
    isActive: true,
  },
  {
    id: 2,
    name: "Kofi",
    track: "Backend Development",
    bio: "Enjoys designing RESTful APIs and working with relational databases.",
    skillLevel: "Intermediate",
    isActive: false,
  },
  {
    id: 3,
    name: "Zara",
    track: "Data Science",
    bio: "Exploring machine learning models and data visualization techniques.",
    skillLevel: "Advanced",
    isActive: true,
  },
  {
    id: 4,
    name: "Liam",
    track: "Mobile Development",
    bio: "Building cross-platform apps with React Native and Expo.",
    skillLevel: "Intermediate",
    isActive: true,
  },
  {
    id: 5,
    name: "Fatima",
    track: "UI/UX Design",
    bio: "Crafting intuitive user experiences through research and prototyping.",
    skillLevel: "Beginner",
    isActive: false,
  },
  {
    id: 6,
    name: "Ethan",
    track: "DevOps & Cloud",
    bio: "Automating deployments and managing cloud infrastructure on AWS.",
    skillLevel: "Advanced",
    isActive: true,
  },
  {
    id: 7,
    name: "Nadia",
    track: "Cybersecurity",
    bio: "Learning ethical hacking and network security fundamentals.",
    skillLevel: "Beginner",
    isActive: true,
  },
];

function App() {
  // State holds the full student array
  const [students, setStudents] = useState(initialStudents);

  // Toggles the isActive field for the student with the given id
  function toggleActive(id) {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id
          ? { ...student, isActive: !student.isActive }
          : student
      )
    );
  }

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <ProfileList students={students} onToggle={toggleActive} />
      </main>
      <Footer totalStudents={students.length} />
    </div>
  );
}

export default App;
