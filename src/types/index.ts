export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  socialLinks: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    email: string;
  };
}

export interface Milestone {
  id: number;
  title: string;
  date: string;
  description: string;
  completed: boolean;
  marks?: string;
}

export interface Document {
  id: number;
  title: string;
  description: string;
  fileUrl: string;
  fileType: string;
  dateUploaded: string;
}

export interface Presentation {
  id: number;
  title: string;
  date: string;
  description: string;
  slideUrl: string;
}

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
}