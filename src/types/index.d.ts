export interface IProject {
  title: string;
  description: string;
  techStack: {
    name: string;
    icon: JSX.Element;
  }[];
  image: string;
  liveUrl: string;
  github: {
    frontend: string | null;
    backend: string | null;
  };
  projectType: string;
}

export interface IContactItem {
  icon: FC<{ className?: string }>;
  title: string;
  value: string;
}

export interface ISocialLink {
  href: string;
  icon: FC<{ className?: string }>;
}

export interface IContactCard {
  icon: FC<{ className?: string }>;
  title: string;
  description: string;
  children: ReactNode;
}
