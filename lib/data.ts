import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/lms.png";
import rmtdevImg from "@/public/ecommerce.png";
import wordanalyticsImg from "@/public/discord.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const educationData = [
  {
    college: "Jawaharlal Nehru Technological University, Hyderabad",
    course: "B.tech in Computer Science & Engineering",
    location: "Hyderabad, TS",
    coursework:
      "Relevant coursework: Advanced Analysis of Algorithms, Object oriented Analysis & Design, Software Engineering.",

    icon: React.createElement(LuGraduationCap),
    date: "2015-2019",
  },
  {
    college: "California State University, Long Beach",
    course: "MS in Computer Science",
    location: "Long Beach, CA",
    coursework:
      "Relevant coursework: Web Technologies, Data structures, Design Patterns, Cloud Computing, Operating System.",
    icon: React.createElement(LuGraduationCap),

    date: "2021 - 2023",
  },
] as const;

export const experiencesData = [
  {
    title: "Web Developer",
    company: "Infosys Ltd",
    location: "Hyderabad, TS",
    description:
      "Built highly interactive and responsive user interfaces following best practices using HTML, CSS, JavaScript, Bootstrap, react, redux, angular, client scripts, and Business rules.",
    icon: React.createElement(CgWorkAlt),
    date: "2019-2021",
  },
  {
    title: "Instructional Student Assistant",
    company: "CSULB",
    location: "Long Beach, CA",
    description:
      "Worked as an ISA for Management Information Systems & Business Application Programming courses that have 85 students in total and Conducted class hours to solve student doubts and graded their assignments and exams within the deadlines.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Python Instructor",
    company: "CSULB",
    location: "Long Beach, CA",
    description:
      "Instructed Python programming language to College of Business students through 1:1 meetings and Prepared more than 20 Jupyter Notebooks on different topics of Python Programming Language.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
] as const;

export const projectsData = [
  {
    title: "Learning Management System",
    description:
      "LMS is a platform where teachers can authenticate, add, edit, publish, sell, and check sales of courses and students can purchase them. ",
    tags: ["React", "Next 13", "Tailwind CSS", "Prisma", "MySQL", "Stripe"],
    imageUrl: corpcommentImg,
  },
  {
    title: "E-Commerce Store",
    description: "It is a store where admin can add multiple products in different categories and users can buy them. ",
    tags: ["React", "Next 13", "Tailwind CSS", "Prisma", "MySQL"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Discord Clone",
    description:
      "A real-time messaging application where users can chat, video call, create groups, invite links in one place.",
    tags: ["React", "Next 13", "Socket.io", "Tailwind", "Clerk"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "REST",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "MySQL",
  "NoSQL",
  "Angular",
  "ServerScript",
  "ClientScript",
  "Business Rules",
  "UI Policies",
  "Python",
  "Java",
  "Figma",
] as const;
