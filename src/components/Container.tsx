import { ReactNode } from 'react';

const Container = ({ children }: Readonly<{ children: ReactNode }>) => {
  return <div className="relative z-50 mx-auto min-h-screen max-w-[1280px] px-5">{children}</div>;
};

export default Container;
