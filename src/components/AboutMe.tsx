import { TbFileText } from 'react-icons/tb';
import SectionTitle from './SectionTitle';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { LuGraduationCap } from 'react-icons/lu';
import { HiOutlineDownload } from 'react-icons/hi';
import Image from 'next/image';

const AboutMe = () => {
  return (
    <section id="about-me" className="relative my-20 space-y-10 pt-10">
      <SectionTitle title="About Me" />

      <div className="flex items-center gap-10 max-lg:flex-col">
        <div className="flex-1 space-y-10">
          <div className="w-full space-y-2">
            <div className="flex items-center gap-3">
              <div className="border-primary/30 flex size-10 items-center justify-center rounded-md border">
                <TbFileText className="text-primary size-5" />
              </div>
              <h2 className="text-primary text-lg font-medium">Bio</h2>
            </div>

            <p className="pl-[52px] text-white/60">
              Frontend Developer with 1+ year of experience building responsive and scalable web
              applications using React and Next.js. Skilled in turning UI/UX designs into
              pixel-perfect, high-performing code, with a strong focus on clean architecture,
              performance optimization, and modern frontend practices.
            </p>
          </div>

          <div className="flex justify-between gap-10 max-sm:flex-col">
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-3">
                <div className="border-primary/30 flex size-10 items-center justify-center rounded-md border">
                  <LuGraduationCap className="text-primary size-5" />
                </div>
                <h2 className="text-primary text-lg font-medium">Education</h2>
              </div>

              <div className="space-y-1 pl-[52px]">
                <h3 className="font-medium">Bachelor of Arts (BA) in English</h3>
                <p className="text-sm text-white/60">National University</p>
                <p className="text-sm text-white/60">2023 - 2027 (Expected)</p>
              </div>
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-3">
                <div className="border-primary/30 flex size-10 items-center justify-center rounded-md border">
                  <MdOutlineWorkOutline className="text-primary size-5" />
                </div>
                <h2 className="text-primary text-lg font-medium">Experience</h2>
              </div>

              <div className="space-y-1 pl-[52px]">
                <h3 className="font-medium">Frontend Developer (Remote)</h3>
                <p className="text-sm text-white/60">Bhuiyan Tourism</p>
                <p className="text-sm text-white/60">April 2024 - May 2025</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-sm flex-col items-center space-y-5 max-lg:flex max-lg:text-center">
          <Image
            alt=""
            src="/mdnuruzzamannirob.jpg"
            width={208}
            height={208}
            className="size-52 rounded-full bg-white/5 object-cover object-top"
          />

          <div className="space-y-1">
            <h2 className="text-xl font-medium">Md. Nuruzzaman</h2>
            <p className="text-sm text-white/60">
              Frontend Developer (React.js & Next.js) | Creating High-Performance, Modern Web
              Applications
            </p>
          </div>

          <button className="bg-primary hover:bg-primary/90 flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-white transition">
            <HiOutlineDownload className="size-5" /> Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
