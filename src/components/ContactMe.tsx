import { FC } from 'react';
import { HiOutlineLocationMarker, HiOutlineMail } from 'react-icons/hi';
import { BsTelephone } from 'react-icons/bs';
import { MdOutlineContactPage } from 'react-icons/md';
import { SiGitconnected } from 'react-icons/si';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaDiscord } from 'react-icons/fa6';
import SectionTitle from './SectionTitle';
import { IContactCard, IContactItem, ISocialLink } from '@/types';
import Link from 'next/link';

const ContactMe: FC = () => {
  const ContactCard: FC<IContactCard> = ({ icon: Icon, title, description, children }) => (
    <div className="flex gap-3">
      <div className="border-primary/20 flex size-12 items-center justify-center rounded-md border">
        <Icon className="text-primary size-6" />
      </div>
      <div className="space-y-5">
        <div className="space-y-1">
          <h2 className="text-primary text-lg font-medium">{title}</h2>
          <p className="text-sm text-white/60">{description}</p>
        </div>
        {children}
      </div>
    </div>
  );

  const ContactItem: FC<IContactItem> = ({ icon: Icon, title, value }) => (
    <div className="flex gap-3">
      <Icon className="text-primary size-[22px]" />
      <div className="space-y-1 text-sm">
        <h3 className="font-medium">{title}</h3>
        <p className="text-white/70">{value}</p>
      </div>
    </div>
  );
  const SocialLink: FC<ISocialLink> = ({ href, icon: Icon }) => (
    <Link
      href={href}
      className="text-white/50 transition-colors hover:text-white/80"
      target="_blank"
    >
      <Icon className="size-[22px]" />
    </Link>
  );

  return (
    <section id="contact-me" className="relative min-h-dvh space-y-10 py-20">
      <SectionTitle
        title="Contact Me"
        description="I'm always happy to discuss opportunities, answer questions, or explore new ideas. Send a message or connect online."
      />

      <div className="flex flex-col gap-10 lg:flex-row">
        <div className="w-full max-w-xl space-y-10">
          {/* Contact Information */}
          <ContactCard
            icon={MdOutlineContactPage}
            title="Contact Information"
            description="Reach me directly via email or phone for questions or collaborations."
          >
            <div className="space-y-4">
              <ContactItem icon={HiOutlineMail} title="Email" value="dev.mdnuruzzaman@gmail.com" />
              <ContactItem icon={BsTelephone} title="Phone" value="+8801973875893" />
              <ContactItem
                icon={HiOutlineLocationMarker}
                title="Location"
                value="Jatrabari, Dhaka, Bangladesh"
              />
            </div>
          </ContactCard>

          {/* Social Links */}
          <ContactCard
            icon={SiGitconnected}
            title="Connect with Me"
            description="Stay connected on social media for collaborations or updates."
          >
            <div className="flex items-center gap-5">
              <SocialLink href="https://github.com/mdnuruzzamannirob" icon={FaGithub} />
              <SocialLink
                href="https://www.linkedin.com/in/mdnuruzzamannirobdev"
                icon={FaLinkedin}
              />
              <SocialLink href="https://www.facebook.com/mdnuruzzamannirobdev" icon={FaFacebook} />
              <SocialLink
                href="https://www.instagram.com/mdnuruzzamannirobdev"
                icon={FaInstagram}
              />
              <SocialLink href="https://discord.com/users/1194867198074830898" icon={FaDiscord} />
            </div>
          </ContactCard>
        </div>

        {/* Placeholder for form or map */}
        <div className="flex h-96 w-full items-center justify-center rounded-md border text-white/50">
          Form / Map goes here
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
