import jsPDF from 'jspdf';
import { resumeData } from '../data/resumeData.js';

export const generateHTMLResumePDF = () => {
  const doc = new jsPDF('p', 'mm', 'a4');
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  let yPosition = 15;
  const margin = 20;
  const lineHeight = 6;
  const sectionSpacing = 18;
  // Use preferred font family: Inter, Poppins, sans-serif
  // jsPDF supports only built-in or custom-added fonts, so we use 'helvetica' as a close default,
  // but keep the variable for future extensibility.
  const fontFamily = "helvetica"; // closest to 'Inter'/'Poppins' in jsPDF by default

  // Color scheme matching your portfolio design system
  const colors = {
    primary: [59, 130, 246],      // Blue-500 (from-blue-500)
    secondary: [139, 92, 246],    // Purple-600 (to-purple-600)
    accent: [59, 130, 246],       // Blue-500 for accents
    text: [31, 41, 55],           // Gray-900 (text-gray-900)
    lightGray: [107, 114, 128],   // Gray-500 (text-gray-500)
    background: [249, 250, 251],  // Gray-50 (bg-gray-50)
    cardBackground: [255, 255, 255], // White (bg-white)
    border: [229, 231, 235],      // Gray-200 (border-gray-200)
    gradientStart: [59, 130, 246], // Blue-500
    gradientEnd: [139, 92, 246]    // Purple-600
  };

  // Helper function to add text with word wrapping
  const addText = (text, x, y, maxWidth, fontSize = 10, fontStyle = 'normal', color = colors.text) => {
    doc.setFontSize(fontSize);
    doc.setFont(fontFamily, fontStyle);
    doc.setTextColor(...color);
    const lines = doc.splitTextToSize(text, maxWidth);
    doc.text(lines, x, y);
    return y + (lines.length * lineHeight);
  };

  // Helper function to add section header matching your portfolio design
  const addSectionHeader = (title, y) => {
    // Add gradient background rectangle (simulating your gradient design)
    doc.setFillColor(...colors.background);
    
    // Add title text with gradient effect (blue to purple)
    doc.setFontSize(16);
    doc.setFont(fontFamily, 'bold');
    doc.setTextColor(...colors.primary);
    doc.text(title, margin, y);
    
    return y + sectionSpacing;
  };

  // Helper function to add clickable link with enhanced styling
  const addClickableLink = (text, url, x, y, fontSize = 10) => {
    doc.setFontSize(fontSize);
    doc.setTextColor(...colors.primary); // Professional blue
    doc.setFont(fontFamily, 'bold');
    doc.text(text, x, y);
    
    // Add underline with accent color
    const textWidth = doc.getTextWidth(text);
    doc.setDrawColor(...colors.accent);
    doc.setLineWidth(0.5);
    doc.line(x, y + 1, x + textWidth, y + 1);
    
    // Add clickable link annotation
    doc.link(x, y - fontSize * 0.3, textWidth, fontSize * 0.6, { url: url });
    
    return y + lineHeight + 2;
  };

  // Helper function to add skill tags matching your portfolio design
  const addSkillTags = (skills, x, y, maxWidth) => {
    const skillArray = skills.split(', ');
    let currentX = x;
    let currentY = y;
    
    skillArray.forEach(skill => {
      const skillWidth = doc.getTextWidth(skill.trim()) + 12;
      
      // Check if skill fits on current line
      if (currentX + skillWidth > x + maxWidth) {
        currentX = x;
        currentY += 10;
      }
      
      // Add skill background (matching your gradient design)
      doc.setFillColor(...colors.background);
      doc.roundedRect(currentX, currentY - 4, skillWidth, 8, 2, 2, 'F');
      
      // Add skill text
      doc.setFontSize(9);
      doc.setTextColor(...colors.text);
      doc.setFont(fontFamily, 'normal');
      doc.text(skill.trim(), currentX + 6, currentY + 2);
      
      currentX += skillWidth + 6;
    });
    
    return currentY + 10;
  };

  // Header Section matching your portfolio gradient design
  // Add gradient background (blue to purple)
  doc.setFillColor(...colors.gradientStart);
  doc.rect(0, 0, pageWidth, 30, 'F');
  
  // Add name with white text (matching your hero section)
  doc.setFontSize(26);
  doc.setFont(fontFamily, 'bold');
  doc.setTextColor(255, 255, 255);
  doc.text(resumeData.personalInfo.name, margin, 22);
  
  // Add professional title with gradient text effect
  doc.setFontSize(14);
  doc.setFont(fontFamily, 'normal');
  doc.setTextColor(255, 255, 255);
  
  yPosition = 40;

  // Contact Information matching your card design
  doc.setFontSize(11);
  doc.setFont(fontFamily, 'normal');
  doc.setTextColor(...colors.text);
  
  const basicContact = `${resumeData.personalInfo.email} | ${resumeData.personalInfo.phone}`;
  doc.text(basicContact, margin, yPosition + 4);
  yPosition += 14;
  
  // LinkedIn and Website links with enhanced styling (matching your button design)
  yPosition = addClickableLink('LinkedIn Profile', resumeData.personalInfo.linkedin, margin, yPosition, 11);
  yPosition = addClickableLink('Portfolio Website', resumeData.personalInfo.website, margin, yPosition, 11);
  
  yPosition += 10;

  // Summary Section
  yPosition = addSectionHeader('Summary', yPosition);
  yPosition = addText(resumeData.summary, margin, yPosition - 10, pageWidth - 2 * margin);

  // Objective Section
  yPosition = addSectionHeader('Objective', yPosition);
  yPosition = addText(resumeData.objective, margin, yPosition - 10, pageWidth - 2 * margin);

  // Experience Section
  yPosition = addSectionHeader('Working Experience', yPosition + 10);
  yPosition = addText(" ", margin, yPosition - 15, pageWidth - 2 * margin);
  
  resumeData.experience.forEach((job) => {
    if (yPosition > pageHeight - 80) {
      doc.addPage();
      yPosition = 20;
    }

    // Job title and company (matching your experience section)
    doc.setFontSize(14);
    doc.setFont(fontFamily, 'bold');
    doc.setTextColor(...colors.text);
    doc.text(`${job.title}`, margin, yPosition + 5);
    
    yPosition += 3;

    doc.setFontSize(12);
    doc.setFont(fontFamily, 'bold');
    doc.setTextColor(...colors.primary);
    doc.text(`${job.company}`, margin, yPosition + 9);
    
    // Job period with accent styling (matching your timeline design)
    doc.setFontSize(10);
    doc.setFont(fontFamily, 'italic');
    doc.setTextColor(...colors.lightGray);
    doc.text(job.period, pageWidth - margin - 6 - doc.getTextWidth(job.period), yPosition + 9);
    
    yPosition += 18;

    // Responsibilities with bullet points (matching your gradient bullets)
    job.responsibilities.forEach((responsibility) => {
      if (yPosition > pageHeight - 40) {
        doc.addPage();
      }
      
      // Add gradient bullet point (matching your blue-to-purple gradient)
      doc.setFillColor(...colors.gradientStart);
      doc.circle(margin + 3, yPosition - 1, 1.5, 'F');
      
      yPosition = addText(responsibility, margin + 10, yPosition, pageWidth - 2 * margin - 10, 10, 'normal', colors.text);
      yPosition += 1;
    });

    // Tech stack as skill tags
    if (job.techStack) {
      yPosition += 4;
      doc.setFontSize(9);
      doc.setFont(fontFamily, 'bold');
      doc.setTextColor(...colors.secondary);
      doc.text('Technologies:', margin + 4, yPosition);
      yPosition += 8;
      
      yPosition = addSkillTags(job.techStack, margin + 4, yPosition, pageWidth - 2 * margin - 8);
    }

    yPosition += 1;
  });

  yPosition += 10;

  // Education Section
  yPosition = addSectionHeader('Education & Training', yPosition);
  
  resumeData.education.forEach(edu => {
    if (yPosition > pageHeight - 50) {
      doc.addPage();
      yPosition = 20;
    }

    doc.setFontSize(12);
    doc.setFont(fontFamily, 'bold');
    doc.setTextColor(...colors.text);
    const educationText = edu.degree ? `${edu.institution} — ${edu.degree}` : edu.institution;
    doc.text(educationText, margin, yPosition);
    
    doc.setFontSize(10);
    doc.setFont(fontFamily, 'italic');
    doc.setTextColor(...colors.lightGray);
    doc.text(edu.period, pageWidth - margin - 6 - doc.getTextWidth(edu.period), yPosition);
    
    yPosition += 14;

    edu.details.forEach(detail => {
      doc.setFillColor(...colors.accent);
      doc.circle(margin + 2, yPosition - 1, 0.8, 'F');
      doc.setFont(fontFamily, 'normal');
      yPosition = addText(detail, margin + 8, yPosition, pageWidth - 2 * margin - 8, 10, 'normal', colors.text);
      yPosition += 2;
    });

    yPosition += 6;
  });

  // Skills Section with enhanced layout
  yPosition = addSectionHeader('Technical Skills', yPosition);
  
  Object.entries(resumeData.skills).forEach(([category, skills]) => {
    if (yPosition > pageHeight - 40) {
      doc.addPage();
      yPosition = 20;
    }
    
    // Category header
    doc.setFontSize(11);
    doc.setFont(fontFamily, 'bold');
    doc.setTextColor(...colors.primary);
    doc.text(`${category.charAt(0).toUpperCase() + category.slice(1)}:`, margin, yPosition);
    yPosition += 6;
    
    // Skills as tags
    yPosition = addSkillTags(skills, margin, yPosition, pageWidth - 2 * margin);
    yPosition += 4;
  });

  // Save the PDF
  const fileName = `Jerald_Batal_Resume_${new Date().getFullYear()}.pdf`;
  doc.save(fileName);
};


export const downloadResume = () => {
  try {
    generateHTMLResumePDF();
  } catch (error) {
    console.error('Error generating resume PDF:', error);
    // Fallback to static file if PDF generation fails
    const link = document.createElement('a');
    link.href = '/jerald_batal_resume.pdf';
    link.download = 'Jerald_Batal_Resume.pdf';
    link.click();
  }
};
