# Resume Data Management

This directory contains the dynamic resume data structure that generates your resume PDF on-demand.

## How to Update Your Resume

To update your resume information, simply edit the `resumeData.js` file in this directory. The resume will be automatically generated with the new information when users click the "Download Resume" button.

### Available Sections to Update:

1. **Personal Information** (`personalInfo`)
   - name, email, phone, linkedin, website

2. **Summary** (`summary`)
   - Professional summary paragraph

3. **Objective** (`objective`)
   - Career objective statement

4. **Experience** (`experience`)
   - Array of job objects with:
     - title, company, period
     - responsibilities (array of strings)
     - techStack (optional)

5. **Education** (`education`)
   - Array of education objects with:
     - institution, degree, period
     - details (array of strings, optional)

6. **Skills** (`skills`)
   - Object with categories:
     - frontend, stateManagement, styling, other

### Benefits of This Approach:

- ✅ No need to manually update PDF files
- ✅ Version control for resume changes
- ✅ Consistent formatting across all downloads
- ✅ Easy to maintain and update
- ✅ Automatic filename with current year
- ✅ Fallback to static file if generation fails

### Example Update:

```javascript
// To add a new job experience:
experience: [
  {
    title: "Senior Frontend Developer",
    company: "New Company",
    period: "Jan 2025 – Present",
    responsibilities: [
      "Lead frontend development team",
      "Implement new features and improvements"
    ],
    techStack: "React.js, TypeScript, Next.js"
  },
  // ... existing experiences
]
```

The resume will automatically reflect these changes the next time someone downloads it!
