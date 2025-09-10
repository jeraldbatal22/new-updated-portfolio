import {
  AlignmentType,
  Document,
  Packer,
  Paragraph,
  Table,
  TableRow,
  TableCell,
  WidthType,
  VerticalAlign,
  BorderStyle,
  TextRun,
} from "docx";
import { saveAs } from "file-saver";
import { resumeData } from "../data/resumeData";

export const generateDocxResume = async () => {
  const { personalInfo, summary, objective, experience, education, skills } =
    resumeData;

  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          // === HEADER (blue background with name) ===
          headerSection(personalInfo.name),

          // Contact info
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({ text: personalInfo.email }),
              new TextRun({ text: " | " }),
              new TextRun({ text: personalInfo.phone }),
            ],
          }),

          // Links (LinkedIn + Portfolio)
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: personalInfo.linkedin,
                style: "Hyperlink",
                hyperlink: personalInfo.linkedin,
              }),
              new TextRun({ text: " | " }),
              new TextRun({
                text: personalInfo.website,
                style: "Hyperlink",
                hyperlink: personalInfo.website,
              }),
            ],
            spacing: { after: 400 },
          }),

          // === SUMMARY ===
          sectionHeader("Summary"),
          new Paragraph({
            text: summary,
            spacing: { after: 400 },
          }),

          // === OBJECTIVE ===
          sectionHeader("Objective"),
          new Paragraph({
            text: objective,
            spacing: { after: 400 },
          }),

          // === EXPERIENCE ===
          sectionHeader("Working Experience"),
          ...experience.flatMap((exp) =>
            jobEntry(
              exp.title,
              exp.company,
              exp.period,
              exp.responsibilities,
              exp.techStack
            )
          ),

          // === EDUCATION ===
          sectionHeader("Education & Training"),
          ...education.flatMap((edu) => [
            new Paragraph({
              text: `${edu.institution} — ${edu.degree || ""} (${edu.period})`,
              bold: true,
            }),
            ...(edu.details.length > 0
              ? edu.details.map(
                  (detail) =>
                    new Paragraph({
                      children: [
                        new TextRun({ text: "● ", color: "2563eb" }),
                        new TextRun({ text: detail }),
                      ],
                    })
                )
              : []),
            new Paragraph({ text: "", spacing: { after: 200 } }),
          ]),

          // === SKILLS ===
          sectionHeader("Technical Skills"),
          new Paragraph({ text: `Frontend: ${skills.frontend}` }),
          new Paragraph({ text: `State Management: ${skills.stateManagement}` }),
          new Paragraph({ text: `Styling: ${skills.styling}` }),
          new Paragraph({ text: `Other: ${skills.other}` }),
        ],
      },
    ],
  });

  const blob = await Packer.toBlob(doc);
  saveAs(blob, `${personalInfo.name.replace(" ", "_").toLocaleLowerCase()}_resume.docx`);
};

// === BLUE HEADER SECTION ===
const headerSection = (name) =>
  new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            shading: { fill: "2563eb" }, // Blue background
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({
                    text: name,
                    bold: true,
                    size: 44,
                    color: "FFFFFF", // White text
                  }),
                ],
              }),
            ],
            verticalAlign: VerticalAlign.CENTER,
            borders: {
              top: { style: BorderStyle.NONE },
              bottom: { style: BorderStyle.NONE },
              left: { style: BorderStyle.NONE },
              right: { style: BorderStyle.NONE },
            },
          }),
        ],
      }),
    ],
  });

// === SECTION HEADER ===
const sectionHeader = (title) =>
  new Paragraph({
    children: [
      new TextRun({
        text: title,
        bold: true,
        color: "2563eb", // Blue text
        size: 28,
      }),
    ],
    spacing: { before: 300, after: 150 },
  });

// === JOB ENTRY ===
const jobEntry = (role, company, dates, bullets, tech) => {
  const paras = [
    new Paragraph({
      children: [
        new TextRun({ text: role, bold: true }),
        new TextRun({ text: " | ", color: "808080" }),
        new TextRun({ text: company, color: "2563eb" }),
      ],
    }),
    new Paragraph({
      text: dates,
      italics: true,
      spacing: { after: 100 },
    }),
  ];

  bullets.forEach((b) =>
    paras.push(
      new Paragraph({
        children: [
          new TextRun({ text: "● ", color: "2563eb" }),
          new TextRun({ text: b }),
        ],
      })
    )
  );

  if (tech) {
    paras.push(
      new Paragraph({
        text: `Technologies: ${tech}`,
        spacing: { after: 200 },
      })
    );
  } else {
    paras.push(new Paragraph({ text: "", spacing: { after: 200 } }));
  }

  return paras;
};
