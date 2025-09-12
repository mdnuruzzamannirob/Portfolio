export interface TProject {
  title: string;
  description: string;
  techStack: {
    name: string;
    icon: JSX.Element;
  }[];
  image: string;
  liveUrl: string;
  github: {
    frontend: string;
    backend: string | null;
  };
  projectType: string;
}
