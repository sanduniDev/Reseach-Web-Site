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
    role: "Software Quality Assurance Lead",
    bio: "Sanduni is a Software Quality Assurance Engineer specializing in automation, performance testing, API testing, and manual mobile & web testing. As a final year undergraduate at SLIIT, she brings extensive practical experience in ensuring software quality and reliability to the research project.",
    imageUrl: "https://media.licdn.com/dms/image/v2/D5603AQH9KJT7MPE_lQ/profile-displayphoto-shrink_200_200/B56ZZXAaJPHsAY-/0/1745216447948?e=1753920000&v=beta&t=ZE22w9Mhupgov8oHA-7I1BOQKxl-FldPBP3AVHqJXO4",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/h-e-s-sathsarani/",
      email: "sathsarani.hes@example.com"
    }
  },
  {
    id: 2,
    name: "Yasitha Sandun",
    role: "Software Development Intern",
    bio: "Yasitha is an Intern Software Engineer and student at SLIIT from Matara District. He contributes valuable hands-on development experience and fresh perspectives on modern software engineering practices to the agile research initiatives.",
    imageUrl: "https://media.licdn.com/dms/image/v2/C4E03AQF3qUnHExYGWQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1627653602626?e=1753920000&v=beta&t=eehNxncuR_KTG3cpDBD0kOSYvx9Y2lhdENo30oEkDLY",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/yasandun-9028bbe/",
      email: "yasithasandu@example.com"
    }
  },
  {
    id: 3,
    name: "Ravindu Rusith",
    role: "Research Developer",
    bio: "Ravindu is an IT Undergraduate at SLIIT with strong development skills and active GitHub contributions. Based in Matara District, he specializes in implementing research prototypes and contributing to the technical development of agile methodology tools.",
    imageUrl: "https://media.licdn.com/dms/image/v2/C5603AQGjlHAnRp4Nhg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1624464298093?e=1753920000&v=beta&t=o9K9uz1RMqxsuZXi6Io4UxBSlC6dnXbAfXdvgGf5XIg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/ravindu-rusith",
      email: "Ravindu.rusith@gmail.com"
    }
  },
  {
    id: 4,
    name: "Shakila Waidyasekara",
    role: "Information Technology Specialist",
    bio: "Shakila is pursuing a BSc(Hons) in Information Technology, specializing in Information Technology at SLIIT. From Kegalle District, he brings deep technical knowledge and innovative approaches to information systems that support agile development processes.",
    imageUrl: "https://media.licdn.com/dms/image/v2/D5603AQFrrcyvFugCMQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1688216278307?e=1753920000&v=beta&t=Rig8kakWPfnwlYSUQC30I5ke2asxzSgYmXgCYtjUnlE",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/shakila-waidyasekara-6b856a269/",
      email: "shimaranga@gmail.com"
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
    title: "Proposal Report (IT21266546) ",
    description: "Group final report detailing the complete research project, methodology, and findings.",
    fileUrl: "https://mysliit.sharepoint.com/:b:/s/CDAPSubmissionCloud/EdwvFDmGtiZBqPC5gyH6T7kBl_dAQ45TKIkSiQbwrGDdiQ?e=tXaj66",
    fileType: "PDF",
    dateUploaded: "March 31, 2025",
    submissionType: "Group"
  },
  {
    id: 2,
    title: "Proposal Report (IT21232190)",
    description: "Academic research paper summarizing key findings and contributions.",
    fileUrl: "https://mysliit.sharepoint.com/:b:/s/CDAPSubmissionCloud/EbxQ8_rb96NLnOfNplGkh3oBxuEHFUv4iE9a83cf0tZSYA?e=9e7bOW",
    fileType: "PDF",
    dateUploaded: "April 11, 2025",
    submissionType: "Group"
  },
  {
    id: 2,
    title: "Proposal Report (IT21268380)",
    description: "Academic research paper summarizing key findings and contributions.",
    fileUrl: "https://mysliit.sharepoint.com/:b:/s/CDAPSubmissionCloud/Ef82ikNkiMxFoBvs1ryqupgBM3MQQ8Y4y9f6jSR9BsSI_w?e=KTD6Fd",
    fileType: "PDF",
    dateUploaded: "April 11, 2025",
    submissionType: "Group"
  },
    {
    id: 2,
    title: "Proposal Report (IT21440472)",
    description: "Academic research paper summarizing key findings and contributions.",
    fileUrl: "https://mysliit.sharepoint.com/:b:/s/CDAPSubmissionCloud/Ef82ikNkiMxFoBvs1ryqupgBM3MQQ8Y4y9f6jSR9BsSI_w?e=KTD6Fd",
    fileType: "PDF",
    dateUploaded: "April 11, 2025",
    submissionType: "Group"
  },
  {
    id: 3,
    title: "Final Report (IT21266546)",
    description: "Individual final report submission for team member IT21216800.",
    fileUrl: "https://mysliit.sharepoint.com/:b:/s/CDAPSubmissionCloud/EVz4D1Tpn4RKn4O7I0bwZ4EBi1kVsIyNpnucMyGwK7u1CA?e=YQE3HU",
    fileType: "PDF",
    dateUploaded: "April 11, 2025",
    submissionType: "Individual"
  },
 {
    id: 2,
    title: "Final Report (IT21232190)",
    description: "Academic research paper summarizing key findings and contributions.",
    fileUrl: "https://mysliit.sharepoint.com/:b:/s/CDAPSubmissionCloud/ESW3KMZBuZlLtRw9-I5oSRYBd9jijtk4JMlVi42grVm-9Q?e=u1AnEz",
    fileType: "PDF",
    dateUploaded: "April 11, 2025",
    submissionType: "Group"
  },
  {
    id: 2,
    title: "Final Report (IT21268380)",
    description: "Academic research paper summarizing key findings and contributions.",
    fileUrl: "https://mysliit.sharepoint.com/:b:/s/CDAPSubmissionCloud/EcYuHt9ap5lOgdjjk4LzWGkBImHE-GCnwLKxViJxUk7B9w?e=1POfM9",
    fileType: "PDF",
    dateUploaded: "April 11, 2025",
    submissionType: "Group"
  },
    {
    id: 2,
    title: "Final Report (IT21440472)",
    description: "Academic research paper summarizing key findings and contributions.",
    fileUrl: "https://mysliit.sharepoint.com/:b:/s/CDAPSubmissionCloud/Ef82ikNkiMxFoBvs1ryqupgBM3MQQ8Y4y9f6jSR9BsSI_w?e=KTD6Fd",
    fileType: "PDF",
    dateUploaded: "April 11, 2025",
    submissionType: "Group"
  },
  {
    id: 5,
    title: "Final Report (IT21260056)",
    description: "Individual final report submission for team member IT21260056.",
    fileUrl: "https://mysliit.sharepoint.com/:b:/s/CDAPSubmissionCloud/EbfYvnzUMpJDlQ164slrGpEBhCOclAhC4n8SP6zXRCP0OA?e=d1J5iM",
    fileType: "PDF",
    dateUploaded: "April 11, 2025",
    submissionType: "Individual"
  },
  {
    id: 6,
    title: "Research Poster",
    description: "Visual presentation of the research project and key findings.",
    fileUrl: "https://drive.google.com/file/d/6_research_poster/view?usp=sharing",
    fileType: "PDF",
    dateUploaded: "May 15, 2025",
    submissionType: "Group"
  }
];

export const presentations: Presentation[] = [
  {
    id: 1,
    title: "Proposal Presentation",
    date: "January 20, 2025",
    description: "Initial presentation introducing the research project to stakeholders.",
    slideUrl: "https://mysliit.sharepoint.com/:p:/s/CDAPSubmissionCloud/Ed0e8Bs2miBEmuEEAkle-FoBWkUhUihe6ZGAj02StuZiiw?e=gNcKF4",
    thumbnailUrl: "https://media.istockphoto.com/id/1954024483/vector/print.jpg?s=612x612&w=0&k=20&c=LBNE5omQykiu4WPc1XFq5Y2vLWbZi-9I8madE4uQ-eI="
  },
  {
    id: 2,
    title: "PP1 Presentation",
    date: "March 10, 2025",
    description: "Presentation of key findings from the literature review and identification of research gaps.",
    slideUrl: "https://drive.google.com/file/d/1XYZ789abc123DEF456ghi789JKL012mno/view?usp=sharing",
    thumbnailUrl: "https://media.istockphoto.com/id/1954024483/vector/print.jpg?s=612x612&w=0&k=20&c=LBNE5omQykiu4WPc1XFq5Y2vLWbZi-9I8madE4uQ-eI="
  },

  {
    id: 3,
    title: "PP2 Presentation",
    date: "April 15, 2025",
    description: "Update on project progress, challenges encountered, and next steps.",
    slideUrl: "https://mysliit.sharepoint.com/:p:/s/CDAPSubmissionCloud/EVJ5OqjTxcZLtsIwKB0vZSIBlaxBCk8UivGFDh976P_iIw?e=fPbRci",
    thumbnailUrl: "https://media.istockphoto.com/id/1954024483/vector/print.jpg?s=612x612&w=0&k=20&c=LBNE5omQykiu4WPc1XFq5Y2vLWbZi-9I8madE4uQ-eI="
  }
];