import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import issue from "@/public/issue.png";
import gamehub from "@/public/gamehub.png";
import nike from "@/public/nike.png";
import pageform from "@/public/pageform.png";
import pricewise from "@/public/pricewise.png";
import admin from "@/public/admin.png";
import store from "@/public/store.png";
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
    title: "E-commerce Admin",
    description:
      "E-commerce is an application where the users can sell products based on different categories. We can add products & categories from Admin Dashboard & CMS",
    tags: ["Next 13.4", "Tailwind CSS", "Typescript", "Shadcn", "Prisma ORM", "MySQL"],
    imageUrl: admin,
    href: "https://ecommerce-store-srikrishna7272.vercel.app/",
    github: "https://github.com/srikrishna7272/ecommerce-admin",
  },
  {
    title: "E-commerce Store",
    description:
      "E-commerce is an application where the users can sell products based on different categories. We can add products & categories from Admin Dashboard & CMS",
    tags: ["Next 13.4", "Tailwind CSS", "Typescript", "Shadcn", "Prisma ORM", "MySQL"],
    imageUrl: store,
    href: "https://ecommerce-store-sk.vercel.app/",
    github: "https://github.com/srikrishna7272/ecommerce-store",
  },
  {
    title: "PageForm",
    description:
      "Pageform is a web application that can Manage event registrations, create a quick opinion poll, create quizzes, and much more.",
    tags: ["Next 13.4", "Tailwind CSS", "Typescript", "Shadcn", "Prisma ORM", "PostgreSQL"],
    imageUrl: pageform,
    href: "https://page-form-livid.vercel.app/",
    github: "https://github.com/srikrishna7272/page-form",
  },
  {
    title: "Issue Tracker",
    description: "Issue Tracker is a platform where Users can authenticate, view, create, edit, delete an issue ",
    tags: ["Next 13.4", "Tailwind CSS", "Typescript", "RadixUI", "Prisma", "MySQL"],
    imageUrl: issue,
    href: "https://sk-issue-tracker-nine.vercel.app/",
    github: "https://github.com/srikrishna7272/issue-tracker",
  },
  {
    title: "Game Hub",
    description:
      "It is a platform where users can search for different types of games based on platform, relevance or genres",
    tags: ["React", "chakra ui", "TypeScript", "Tailwind CSS", "API"],
    imageUrl: gamehub,
    href: "https://game-hub-srikrishna7272.vercel.app/",
    github: "https://github.com/srikrishna7272/game-hub",
  },
  {
    title: "Price Wise",
    description:
      "Pricewise is a web-scrapping tool built with nextjs 13.5, typescript, mongoose, headless UI, tailwindCSS, cronjob, nodemailer.",
    tags: ["Nextjs", "TypeScript", "Tailwind CSS", "MongoDB"],
    imageUrl: pricewise,
    href: "https://price-wise-zeta.vercel.app/",
    github: "https://github.com/srikrishna7272/price-wise",
  },
  {
    title: "Nike Landing Page",
    description: "A visually stunning landing page built completely using TailwindCSS",
    tags: ["TailwindCSS", "react", "TypeScript"],
    imageUrl: nike,
    href: "https://nike-l13alp2yu-srikrishna7272.vercel.app/",
    github: "https://github.com/srikrishna7272/NIKE",
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
