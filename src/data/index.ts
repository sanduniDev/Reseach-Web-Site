import { TeamMember, Milestone, Document, Presentation, Project } from '../types';

export const projectData: Project = {
  title: "Agile User Story Builder",
  subtitle: "A Modern Approach to Agile Development",
  description: "The Agile User Story Builder is a research project focused on developing an innovative methodology and tool for creating more effective user stories in agile software development. By combining natural language processing with domain-specific knowledge, this project aims to enhance the quality and completeness of user stories, leading to better software outcomes.",
  technologies: ["Agile Methodology", "Natural Language Processing", "Machine Learning", "React", "Node.js", "TypeScript"]
};

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Sanduni Sathsarani",
    role: "Team Leader",
    bio: "Sanduni has over 2+ years of experience in agile methodologies and software engineering. Their research focuses on improving agile practices through innovative tools.",
    imageUrl: "https://media.licdn.com/dms/image/v2/D5603AQH9KJT7MPE_lQ/profile-displayphoto-shrink_400_400/B56ZZXAaJPHsAg-/0/1745216447948?e=1753315200&v=beta&t=jfgi2a4Lp4zp64sxO8GLVw9Wl2omd7wuwrUKJPSO6Nw",
    socialLinks: {
      linkedin: "https://linkedin.com/in/alexjohnson",
      github: "https://github.com/alexjohnson",
      twitter: "https://twitter.com/alexjohnson",
      email: "sathsarani.hes@gmail.com"
    }
  },
  {
    id: 2,
    name: "Yasitha Sandun",
    role: "Member",
    bio: "Sam specializes in natural language processing and its applications in software engineering. They bring expertise in machine learning approaches to user story generation.",
    imageUrl: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=600",
    socialLinks: {
      linkedin: "https://linkedin.com/in/samrivera",
      github: "https://github.com/samrivera",
      email: "sam.rivera@example.com"
    }
  },
  {
    id: 3,
    name: "Ravindu Rusith",
    role: "Member",
    bio: "Taylor has implemented numerous agile projects and brings practical industry experience to the research team, helping bridge theory with practice.",
    imageUrl: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600",
    socialLinks: {
      linkedin: "https://linkedin.com/in/taylorkim",
      github: "https://github.com/taylorkim",
      twitter: "https://twitter.com/taylorkim",
      email: "taylor.kim@example.com"
    }
  },
  {
    id: 4,
    name: "Shakila Himaranga",
    role: "Member",
    bio: "Jordan studies the human factors in agile development, focusing on how tools can better serve diverse team needs and improve collaboration.",
    imageUrl: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600",
    socialLinks: {
      linkedin: "https://linkedin.com/in/jordanpatel",
      email: "jordan.patel@example.com"
    }
  }
];

export const milestones: Milestone[] = [
  {
    id: 1,
    title: "Brainstorming Workshop",
    date: "March 25, 2024",
    description: "Initial workshop to brainstorm project ideas and scope.",
    completed: true
  },
  {
    id: 2,
    title: "Group Registration",
    date: "April 19, 2024",
    description: "Official registration of the research group.",
    completed: true
  },
  {
    id: 3,
    title: "Topic Assessment Form (TAF)",
    date: "May 13, 2024",
    description: "Submission of the Topic Assessment Form for review.",
    completed: true
  },
  {
    id: 4,
    title: "Project Charter",
    date: "May 24, 2024",
    description: "Development and submission of the project charter document.",
    completed: true
  },
  {
    id: 5,
    title: "Proposal Reports",
    date: "August 16, 2024",
    description: "Submission of initial proposal reports and draft.",
    completed: true
  },
  {
    id: 6,
    title: "Proposal Presentation",
    date: "July 5-9, 2024",
    description: "Presentation of the research proposal to the committee.",
    completed: true
  },
  {
    id: 7,
    title: "Progress Presentation - I",
    date: "December 4-6, 2024",
    description: "First progress review presentation.",
    completed: true
  },
  {
    id: 8,
    title: "Research Paper",
    date: "March 20, 2025",
    description: "Submission of the research paper.",
    completed: true
  },
  {
    id: 9,
    title: "Progress Presentation - II",
    date: "March 18-20, 2025",
    description: "Second progress review presentation.",
    completed: true
  },
  {
    id: 10,
    title: "Check List II",
    date: "March 17, 2025",
    description: "Final checklist review before project completion.",
    completed: true
  },
  {
    id: 11,
    title: "Project Website",
    date: "June 2, 2025",
    description: "Launch of the project website.",
    completed: true
  },
  {
    id: 12,
    title: "Research Logbook",
    date: "June 9, 2025",
    description: "Completion and submission of research logbook.",
    completed: true
  },
  {
    id: 13,
    title: "Final Presentation & VIVA",
    date: "June 27, 2025",
    description: "Final project presentation and oral defense.",
    completed: false
  }
];

export const documents: Document[] = [
  {
    id: 1,
    title: "Project Charter",
    description: "Official project charter outlining the scope, objectives, stakeholders, and governance of the research project.",
    fileUrl: "#",
    fileType: "PDF",
    dateUploaded: "January 10, 2025"
  },
  {
    id: 2,
    title: "Research Proposal",
    description: "Detailed research proposal including problem statement, methodology, and expected contributions.",
    fileUrl: "#",
    fileType: "PDF",
    dateUploaded: "January 15, 2025"
  },
  {
    id: 3,
    title: "Literature Survey",
    description: "Comprehensive review of academic and industry literature related to agile user stories.",
    fileUrl: "#",
    fileType: "PDF",
    dateUploaded: "March 5, 2025"
  },
  {
    id: 4,
    title: "Progress Report Q1",
    description: "First quarterly progress report detailing research activities and preliminary findings.",
    fileUrl: "#",
    fileType: "PDF",
    dateUploaded: "April 1, 2025"
  },
  {
    id: 5,
    title: "Research Methodology",
    description: "Detailed explanation of the research methodology adopted for this project.",
    fileUrl: "#",
    fileType: "PDF",
    dateUploaded: "May 12, 2025"
  }
];

export const presentations: Presentation[] = [
  {
    id: 1,
    title: "Project Kickoff",
    date: "January 20, 2025",
    description: "Initial presentation introducing the research project to stakeholders.",
    slideUrl: "#"
  },
  {
    id: 2,
    title: "Literature Review Findings",
    date: "March 10, 2025",
    description: "Presentation of key findings from the literature review and identification of research gaps.",
    slideUrl: "#"
  },
  {
    id: 3,
    title: "First Quarter Progress",
    date: "April 15, 2025",
    description: "Update on project progress, challenges encountered, and next steps.",
    slideUrl: "#"
  }
];