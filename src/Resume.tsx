import React from "react";

import resume from "./resume.json";

import "./resume.css";

type LinkProps = {
  text: string;
  icon: string;
  iconType: string;
};

const HeaderLink: React.FC<LinkProps> = ({ text, icon, iconType }) => {
  return (
    <>
      <i className={`fa-${iconType} fa-${icon} custom-color`}></i>&nbsp;
      <span style={{ fontWeight: 500 }}>{text}</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </>
  );
};

const topLinks = [
  {
    text: resume.email,
    icon: "at",
    iconType: "solid",
  },
  {
    text: resume.phone,
    icon: "phone",
    iconType: "solid",
  },
  {
    text: resume.location,
    icon: "location-dot",
    iconType: "solid",
  },
  {
    text: resume.linkedin,
    icon: "linkedin",
    iconType: "brands",
  },
  {
    text: resume.github,
    icon: "github",
    iconType: "brands",
  },
  {
    text: resume.website,
    icon: "earth-asia",
    iconType: "solid",
  },
];

const restSecs = [
  "Projects",
  "Education",
  "Skills",
  "Achievements",
  "Participation",
  "Certifications",
];

const sections = [
  {
    title: "Experience",
    height: 300,
  },
  {
    title: "Projects",
    height: 400,
  },
];

type SecProps = {
  title: string;
  height: number;
};

const Section: React.FC<SecProps> = ({ title, height }) => {
  return (
    <>
      <h1
        className="pb-2 custom-color"
        style={{ borderBottom: "5px solid", textTransform: "uppercase" }}
      >
        {title}
      </h1>
      <div style={{ height, border: "3px solid" }}></div>
    </>
  );
};

const Resume = () => {
  return (
    <div className="p-2">
      <h1>{resume.name}</h1>
      <h6 className="custom-color" style={{ fontSize: 18 }}>
        {resume.description}
      </h6>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "4px 0",
          fontSize: 14,
        }}
      >
        {topLinks.slice(0, 4).map((lnk) => (
          <HeaderLink key={lnk.text} {...lnk} />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "4px 0",
          fontSize: 14,
        }}
      >
        {topLinks.slice(4).map((lnk) => (
          <HeaderLink key={lnk.text} {...lnk} />
        ))}
      </div>
      <div className="col-7 my-3">
        {sections.map((section) => (
          <Section key={section.title} {...section} />
        ))}
      </div>
    </div>
  );
};

export default Resume;
