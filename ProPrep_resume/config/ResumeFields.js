export default {
    contact: {
        name: 'Contact',
        name: 'Contact',
        fields: [
            { name: 'name', label: 'Full Name', placeholder: 'Ex: utkarsh gupta', required: true },
            { name: 'title', label: 'Your Job Title', placeholder: 'Ex: Software Developer' },
            { name: 'email', label: 'Email', type: 'email', placeholder: 'Ex: utkarsh.gupta@example.com' },
            { name: 'phone', label: 'Phone', type: 'tel', placeholder: 'Ex: 7505971807' },
            { name: 'address', label: 'Address', placeholder: 'Ex: Vit Vellore' },
            { name: 'linkedin', label: 'Linked', placeholder: 'Ex: https://www.linkedin.com/in/utkarsh-gupta-296783217' },
            { name: 'github', label: 'Github', placeholder: 'Ex: https://github.com/UtkarshGupta17' },
            { name: 'portfolio', label: 'Portfolio', placeholder: 'Ex: utkarshgupta.com' },
            { name: 'LeetCode', label: 'LeetCode', placeholder: 'Ex: https://leetcode.com/utkarsh1702/' },
        ],
    },
    summary: {
        name: 'Summary',
        fields: [
            {
                name: 'summary',
                label: 'Summary',
                type: 'textarea',
                placeholder: 'Brief summary of your skills and experience...',
                span: true,
                rows: 5,
            },
        ],
    },
    education: {
        name: 'Education',
        multiple: true,
        fields: [
            { name: 'degree', label: 'Study Program', placeholder: 'Bachelor of Computer Science' },
            { name: 'institution', label: 'Institution', placeholder: 'University Name' },
            { name: 'start', label: 'Start Date', type: 'month', placeholder: 'MM/YYYY' },
            { name: 'end', label: 'End Date', type: 'month', placeholder: 'MM/YYYY' },
            { name: 'location', label: 'Location', placeholder: 'City, Country' },
            { name: 'gpa', label: 'GPA', placeholder: '3.8/4.0' },
        ],
    },

    experience: {
        name: 'Experience',
        multiple: true,
        fields: [
            { name: 'role', label: 'Title / Position', span: true, placeholder: 'Software Engineer' },
            { name: 'company', label: 'Workplace / Company', placeholder: 'Company Name' },
            { name: 'location', label: 'Location', placeholder: 'City, Country' },
            { name: 'start', label: 'Start Date', type: 'month', placeholder: 'MM/DD/YYYY' },
            { name: 'end', label: 'End Date', type: 'month', placeholder: 'MM/DD/YYYY' },
            {
                name: 'description',
                label: 'Responsibility',
                type: 'textarea',
                placeholder: 'Brief description of your responsibilities...',
                span: true,
                rows: 4,
                multipoints: true,
            },
        ],
    },

    projects: {
        name: 'Projects',
        multiple: true,
        fields: [
            { name: 'title', label: 'Project Title', placeholder: 'Project Name' },
            { name: 'url', label: 'Project Url', placeholder: 'https://example.com/project' },
            {
                name: 'description',
                label: 'Now Describe What you did',
                type: 'textarea',
                placeholder: 'Briefly describe your project...',
                span: true,
                multipoints: true,
            },
        ],
    },

    skills: {
        name: 'Skills',
        fields: [
            {
                name: 'skills',
                label: 'Skills',
                type: 'textarea',
                placeholder: 'List your skills separated by commas...',
                span: true,
                rows: 3,
            },
        ],
    },

    certificates: {
        name: 'Certificates',
        multiple: true,
        fields: [
            { name: 'title', label: 'Certificate Title', placeholder: 'Certificate Name', span: true },
            { name: 'issuer', label: 'Issuing Organization', placeholder: 'Organization Name' },
            { name: 'date', label: 'Issuance Date', type: 'month', placeholder: 'MM/DD/YYYY' },
        ],
    },

    languages: {
        name: 'Languages',
        multiple: true,
        fields: [
            { name: 'language', label: 'Language', placeholder: 'Language Name' },
            {
                name: 'proficiency',
                label: 'Proficiency',
                placeholder: 'e.g., Fluent, Intermediate, Beginner',
                type: 'select',
                options: [
                    {
                        
                        value: 'Elementary Proficiency',
                    },
                    {
                        
                        value: 'Limited Working Proficiency',
                    },
                    {
                        
                        value: 'Professional Working Proficiency',
                    },
                    {
                        
                        value: 'Full Professional Proficiency',
                    },
                    {
                        
                        value: 'Native or Bilingual Proficiency',
                    },
                ],
            },
        ],
    },
};
