"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3">
        I like to resolve design problems, create smart user interface and imagine useful interaction, developing rich
        web experiences & web applications. I <span className="underline">love</span> the feeling of finally figuring
        out a solution to a problem. My core stack is{" "}
        <span className="font-medium">React, Next.js, SpringBoot, and MongoDB</span>. I am also familiar with
        TypeScript. I am always looking to learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a Software Developer or FrontEnd Developer.
      </p>

      <p>
        <span className="italic">
          I have 2 years of work experience as a Web Developer. I am well-versed in software development methodologies
          and have experience in Agile development. Implemented websites and landing pages from concept through
          deployment.
        </span>
      </p>
    </motion.section>
  );
}
