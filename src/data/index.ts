import { TeamMember, Milestone, Document, Presentation, Project } from '../types';

export const references = [
  '[1] K. Beck et al., "Manifesto for Agile Software Development," Agile Alliance, 2001.',
  '[2] M. Cohn, "User Stories Applied: For Agile Software Development," Boston, MA: Addison-Wesley Professional, 2004.',
  '[3] R. C. Martin, "Clean Code: A Handbook of Agile Software Craftsmanship," Upper Saddle River, NJ: Prentice Hall, 2008.',
  '[4] J. Highsmith, "Agile Software Development Ecosystems," Boston, MA: Addison-Wesley Professional, 2002.',
  '[5] K. Schwaber and J. Sutherland, "The Scrum Guide," Scrum.org, 2020.',
  '[6] S. Ambler, "User Stories: An Introduction," Agile Modeling, 2008.',
  '[7] A. Cockburn, "Writing Effective Use Cases," Boston, MA: Addison-Wesley Professional, 2000.',
  '[8] L. Cao and B. Ramesh, "Agile Requirements Engineering Practices: An Empirical Study," IEEE Software, vol. 25, no. 1, pp. 60–67, 2008.',
  '[9] T. Dingsøyr et al., "A Decade of Agile Methodologies: Towards Explaining Agile Software Development," Journal of Systems and Software, vol. 85, no. 6, pp. 1213–1221, 2012.',
  '[10] P. Abrahamsson et al., "Agile Software Development Methods: Review and Analysis," VTT Publications, 2002.',
  '[11] X. Wang et al., "Automatic Speech Recognition for Software Requirements," in Proc. IEEE International Conference on Software Engineering, pp. 234–245, 2019.',
  '[12] Y. Liu and H. Zhang, "Automated Classification of Software Requirements Using Machine Learning," IEEE Transactions on Software Engineering, vol. 45, no. 3, pp. 456–471, 2019.',
  '[13] M. Jorgensen, "A Review of Studies on Expert Estimation of Software Development Effort," Journal of Systems and Software, vol. 70, no. 1-2, pp. 37–60, 2004.',
  '[14] F. D. Davis, "Perceived Usefulness, Perceived Ease of Use, and User Acceptance of Information Technology," MIS Quarterly, vol. 13, no. 3, pp. 319–340, 1989.',
  '[15] V. Venkatesh and F. D. Davis, "A Theoretical Extension of the Technology Acceptance Model: Four Longitudinal Field Studies," Management Science, vol. 46, no. 2, pp. 186–204, 2000.',
  '[16] L. G. Tornatzky and M. Fleischer, "The Processes of Technological Innovation," Lexington, MA: Lexington Books, 1990.',
  '[17] T. Oliveira and M. F. Martins, "Literature Review of Information Technology Adoption Models at Firm Level," The Electronic Journal Information Systems Evaluation, vol. 14, no. 1, pp. 110–121, 2011.',
  '[18] R. Reddivari, S. Chen, B. T. Rad and H. C. Chen, "Automated support to capture verbal just-in-time requirements via audio mining and cluster-based visualization," Journal of Industrial Information Integration, vol. 14, pp. 41–49, 2019.',
  '[19] I. Ivanov, S. A. Nedelchev, N. Antov, B. Atanasov and Y. Krumov, "Extracting Software Requirements from Unstructured Documents," in Proc. IEEE International Conference on Requirements Engineering (RE), pp. 1–13, 2020.',
  '[20] L. Lucassen, G. Dalpiaz, F. van der Werf, J. M. E. M. van den Heuvel and B. Brinkkemper, "Improving agile requirements: the Quality User Story framework and tool," Requirements Engineering, vol. 21, pp. 383-403, Apr. 2016.',
  '[21] C. A. de Santos, B. Kronsbein and N. B. Melnikova, "Automatic User Story Generation: A Comprehensive Systematic Literature Review," International Journal of Data Science and Analytics, vol. 10, pp. 1-20, June 2024.',
  '[22] G. Martinez, S. Chen, R. A. Smith, K. Mitchell, I. Davis, W. Nelson, D. Davidson and L. Stewart, "Machine Learning based Work Task Classification," Journal of Digital Information Management, vol. 7, pp. 270–279, Oct. 2009.',
  '[23] F. Eriksson, R. Anderson, C. Ivanov and A. S. Volkov, "Learning Complex Teamwork Tasks using a Sub-task Curriculum," arXiv preprint arXiv:2302.04944, 2023.',
  '[24] J. Devlin et al., "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding," in Proc. NAACL-HLT, pp. 4171–4186, 2019.',
  '[25] M. Jorgensen and M. Shepperd, "A Systematic Review of Software Development Cost Estimation Studies," IEEE Transactions on Software Engineering, vol. 33, no. 1, pp. 33–53, 2007.',
  '[26] L. Briand et al., "An Assessment and Comparison of Common Software Cost Estimation Modeling Techniques," in Proc. IEEE International Conference on Software Engineering, pp. 313–322, 1999.',
  '[27] J. Taylor, M. Patel, L. Richards and K. Singh, "Optimizing Agile Frameworks with Machine Learning," Journal of Software Development and Innovation, vol. 15, pp. 45–67, 2022.',
  '[28] A. Gomez, R. White, S. Kim and P. Thompson, "Real-time Feedback Integration for Project Management," IEEE Transactions on Engineering Management, vol. 68, pp. 789–801, Dec. 2023.',
  '[29] F. Hujainah, R. B. Abu Bakar, M. A. Abdulgabber and K. Z. Zamli, "Software Requirements Prioritisation: A Systematic Literature Review on Significance, Stakeholders, Techniques, and Challenges," IEEE Access, vol. 6, pp. 71497–71519, 2018.',
  '[30] F. T. Aburomman, "A Hybrid Approach for Requirements Prioritization in an Incremental Development Model," Journal of Theoretical and Applied Information Technology, vol. 101, pp. 1331–1340, Feb. 2023.',
  '[31] F.-F. Chua, T.-Y. Lim, B. Tajuddin and A. P. Yanuarifiani, "Incorporating Semi-Automated Approach for Effective Software Requirements Prioritization: A Framework Design," Journal of Informatics and Web Engineering, vol. 1, pp. 1–15, Mar. 2022.',
  '[32] J. W. Creswell, "Research Design: Qualitative, Quantitative, and Mixed Methods Approaches," 4th ed. Thousand Oaks, CA: SAGE Publications, 2013.',
  '[33] A. R. Hevner et al., "Design Science in Information Systems Research," MIS Quarterly, vol. 28, no. 1, pp. 75–105, 2004.'
];

export const projectData: Project = {
  title: "Agile User Story Builder",
  subtitle: "A Modern Approach to Agile Development",
  description: "The Agile User Story Builder is a research project focused on developing an innovative methodology and tool for creating more effective user stories in agile software development. By combining natural language processing with domain-specific knowledge, this project aims to enhance the quality and completeness of user stories, leading to better software outcomes.",
  technologies: ["Agile Methodology", "Natural Language Processing", "Machine Learning", "React", "Node.js", "TypeScript"]
};

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Ms. Suriya Kumari",
    role: "Supervisor",
    bio: "Sri Lanka Institute of Information Technology",
    imageUrl: "https://media.licdn.com/dms/image/v2/C5103AQFEVLBVYJxYUA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1521618733218?e=1753920000&v=beta&t=Tid4AelIU0mXgAoqP87uDr4LmpWt_b0tk_r3BIKkxcQ",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/h-e-s-sathsarani/",
      email: "suriyaa.k@sliit.lk"
    }
  },
  {
    id: 2,
    name: "Mr. Ravi Supunya",
    role: "Co-Supervisor",
    bio: "Sri Lanka Institute of Information Technology",
    imageUrl: "https://media.licdn.com/dms/image/v2/C5103AQGnuLjl1pRpow/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1544763895222?e=1753920000&v=beta&t=1P1EkmXSJrtgmhxOABsezvlEpdiOUbqrTy78o8qbuhY",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/yasandun-9028bbe/",
      email: "ravi.s@sliit.lk"
    }
  },

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