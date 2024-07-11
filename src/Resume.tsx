import React from "react";

import resume from "./resume.json";

import "./resume.css";

type LinkProps = {
  text: string;
  icon: string;
  iconType: string;
  isLink?: boolean;
  link?: string;
};

const HeaderLink: React.FC<LinkProps> = ({
  text,
  icon,
  iconType,
  isLink,
  link,
}) => {
  return (
    <>
      <i className={`fa-${iconType} fa-${icon} custom-color`}></i>&nbsp;
      {isLink ? (
        <a href={link}>{text}</a>
      ) : (
        <span style={{ fontWeight: 500 }}>{text}</span>
      )}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </>
  );
};

type ExpProp = {
  role: string;
  company: string;
  start?: string;
  end?: string;
  responsibilities: string[];
  showDate?: boolean;
};

const Experience: React.FC<ExpProp> = ({
  role,
  company,
  start,
  end,
  responsibilities,
  showDate = false,
}) => {
  return (
    <div className="exp">
      <h5 className="my-1">{role}</h5>
      <h6 className="custom-color my-1">{company}</h6>
      {showDate && (
        <span style={{ fontSize: "12px" }}>
          <i className="fa-solid fa-calendar-days"></i>&nbsp;{start} -{" "}
          {end ? end : "present"}
        </span>
      )}
      <ul style={{ paddingLeft: 24 }}>
        {responsibilities.map((res) => (
          <li key={res} style={{ fontSize: "13px", fontWeight: 500 }}>
            {res}
          </li>
        ))}
      </ul>
    </div>
  );
};

type SecProps = {
  title: string;
  component?: React.ReactNode;
};

const Section: React.FC<SecProps> = ({ title, component }) => {
  return (
    <>
      <h2
        className="pb-2 custom-color"
        style={{ borderBottom: "4px solid", textTransform: "uppercase" }}
      >
        {title}
      </h2>
      <div className="mb-1">{component}</div>
    </>
  );
};

const topLinks = [
  {
    text: resume.email,
    icon: "at",
    iconType: "solid",
    isLink: true,
    link: `mailto:${resume.email}`,
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
    isLink: true,
    link: `https://www.linkedin.com/in/${resume.linkedin}`,
  },
  {
    text: resume.github,
    icon: "github",
    iconType: "brands",
    isLink: true,
    link: `https://github.com/${resume.github}`,
  },
  {
    text: resume.website,
    icon: "earth-asia",
    iconType: "solid",
    isLink: true,
    link: resume.website,
  },
];

const rightSections = [
  {
    title: "Education",
    component: (
      <>
        {resume.education.map((edu) => (
          <>
            <h5 className="my-1">{edu.title}</h5>
            <h6 className="custom-color my-1">{edu.college}</h6>
            <div
              style={{
                fontSize: "13px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontWeight: 500,
              }}
            >
              <div>
                <i className="fa-solid fa-calendar-days"></i>&nbsp;
                {edu.year}
              </div>
              <div>{edu.mark}</div>
            </div>
          </>
        ))}
      </>
    ),
  },
  {
    title: "Skills",
    component: (
      <>
        {resume.skills.map((skill) => (
          <div
            className="p-1"
            style={{
              border: "1px solid #bbb",
              borderRadius: "4px",
              display: "inline-block",
              fontSize: "12px",
              fontWeight: 500,
              margin: "2px",
            }}
          >
            {skill}
          </div>
        ))}
      </>
    ),
  },
  {
    title: "Certifications",
    component: (
      <ul style={{ fontSize: 13, fontWeight: 500, paddingLeft: 24 }}>
        {resume.certifications.map((cert) => (
          <li key={cert}>{cert}</li>
        ))}
      </ul>
    ),
  },
  {
    title: "Achievements",
    component: (
      <ul style={{ fontSize: 13, fontWeight: 500 }}>
        {resume.achievements.map((ach) => (
          <li key={ach}>{ach}</li>
        ))}
      </ul>
    ),
  },
];

const sections = [
  {
    title: "Experience",
    height: 300,
    component: (
      <>
        {resume.experience.map((exp) => (
          <Experience {...exp} showDate={true} />
        ))}
      </>
    ),
  },
  {
    title: "Projects",
    height: 400,
    component: (
      <>
        {resume.projects.map((proj) => (
          <Experience
            company={proj.techs}
            role={proj.title}
            responsibilities={proj.details}
            showDate={false}
          />
        ))}
      </>
    ),
  },
];

const Resume = () => {
  return (
    <div className="p-2">
      <h1 className="my-1">{resume.name}</h1>
      <h6 className="custom-color my-1" style={{ fontSize: 18 }}>
        {resume.description}
      </h6>
      <div
        style={{
          display: "flex",
          alignItems: "center",
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
      <div style={{ display: "flex" }}>
        <div
          className="my-3"
          style={{ width: "calc(65% - 16px)", marginRight: 16 }}
        >
          {sections.map((section) => (
            <Section key={section.title} {...section} />
          ))}
        </div>
        <div
          className="my-3"
          style={{ width: "calc(35% - 16px)", marginLeft: 16 }}
        >
          {rightSections.map((section) => (
            <Section key={section.title} {...section} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
