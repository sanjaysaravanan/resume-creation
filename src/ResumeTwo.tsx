import data from "./resume-two.json";
import "./resume-two.css";
import React from "react";
import parse from "html-react-parser";

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <>
      <h3 style={{ borderBottom: "2px solid", fontWeight: 500 }}>{title}</h3>
      {children}
    </>
  );
};

const sections = [
  {
    title: "PROFESSIONAL SUMMARY",
    children: <p>{data.description}</p>,
  },
  {
    title: "SKILLS",
    children: (
      <ul>
        {Object.keys(data.skills).map((key) => (
          <li key={key}>
            <b>{key}:</b>&nbsp;
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-expect-error */}
            {data.skills[key as keyof data.skills].join(", ")}
          </li>
        ))}
      </ul>
    ),
  },
  {
    title: "EXPERIENCE",
    children: (
      <>
        {data.experience.map((exp) => (
          <React.Fragment key={exp.company}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <b>
                {exp.role}, {exp.company}
              </b>
              <i>
                {exp.start} - {exp.end ? exp.end : "Present"}
              </i>
            </div>
            <ul>
              {exp.responsibilities.map((res) => (
                <li key={res}>{parse(res)}</li>
              ))}
            </ul>
          </React.Fragment>
        ))}
      </>
    ),
  },
  {
    title: "EDUCATION",
    children: (
      <>
        {data.education.map((edu) => (
          <React.Fragment key={edu.title}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <b>{edu.title}</b>
              <i>
                {edu.start} - {edu.year}
              </i>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>{edu.college}</span>
              <b>{edu.mark}</b>
            </div>
          </React.Fragment>
        ))}
      </>
    ),
  },
  {
    title: "PROJECTS",
    children: (
      <>
        {data.projects.map((proj) => (
          <React.Fragment key={proj.title}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <b>
                {proj.title} - <a href={proj.projLink}>{proj.projLink}</a>
              </b>
              <i>
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                {/* @ts-expect-error */}
                {proj.year} - {proj?.end ? proj.end : "Present"}
              </i>
            </div>
            <ul>
              {proj.details.map((d) => (
                <li key={d}>{parse(d)}</li>
              ))}
            </ul>
          </React.Fragment>
        ))}
      </>
    ),
  },
  {
    title: "ACHIEVEMENTS",
    children: (
      <ul>
        {data.achievements.map((ach) => (
          <li key={ach}>{parse(ach)}</li>
        ))}
      </ul>
    ),
  },
  {
    title: "CERTIFICATIONS",
    children: (
      <ul>
        {data.certifications.map((cert) => (
          <li key={cert}>{cert}</li>
        ))}
      </ul>
    ),
  },
];

const ResumeTwo = () => {
  return (
    <div style={{ fontSize: 14 }}>
      <h2 className="text-center">{data.name}</h2>
      <div className="text-center" style={{ fontSize: 14 }}>
        <span>{data.location}</span>&nbsp;&#9679;&nbsp;
        <span>{data.email}</span>&nbsp;&#9679;&nbsp;
        <span>{data.phone}</span>&nbsp;&#9679;&nbsp;
        <a href={`https://linkedin.com/in/${data.linkedin}`}>
          linkedin.com/in/{data.linkedin}
        </a>
        &nbsp;&#9679;&nbsp;
        <a href={`https://github.com/${data.github}`}>
          github.com/{data.github}
        </a>
        <div className="text-center">
          <a
            href={`https://www.sanjaysaravanan.dev`}
            style={{ fontSize: 14, fontWeight: "medium" }}
          >
            www.sanjaysaravanan.dev
          </a>
        </div>
      </div>
      {sections.map((sec) => (
        <Section title={sec.title} key={sec.title}>
          {sec.children}
        </Section>
      ))}
    </div>
  );
};

export default ResumeTwo;
