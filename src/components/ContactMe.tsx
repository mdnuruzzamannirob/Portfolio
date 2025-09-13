'use client';

import { FC, FormEvent, useRef, useState } from 'react';
import { HiOutlineLocationMarker, HiOutlineMail } from 'react-icons/hi';
import { BsTelephone } from 'react-icons/bs';
import { MdOutlineContactPage } from 'react-icons/md';
import { SiGitconnected } from 'react-icons/si';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaDiscord } from 'react-icons/fa6';
import SectionTitle from './SectionTitle';
import { IContactCard, IContactItem, ISocialLink } from '@/types';
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import { TbLoader } from 'react-icons/tb';
import { toast } from 'react-toastify';

const ContactMe: FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsLoading(true);

    const formData = new FormData(formRef.current);

    const templateParams = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
      time: new Date().toLocaleString(),
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams as Record<string, unknown>,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      toast.success('Thank you! Your message has been sent successfully.', {
        style: { background: '#1e2939 ', color: '#ffffff' },
      });

      formRef.current.reset();
    } catch (error) {
      toast.error('Apologies, your message could not be sent. Please try again later.', {
        style: { background: '#1e2939 ', color: '#ffffff' },
      });
    } finally {
      setIsLoading(false);
    }
  };

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

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="w-full space-y-4 rounded-xl border border-white/5 bg-white/[2%] p-5"
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 text-sm text-white/70">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="focus:ring-primary w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:ring-2"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-sm text-white/70">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="focus:ring-primary w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:ring-2"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="subject" className="mb-1 text-sm text-white/70">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              name="subject"
              placeholder="Enter subject"
              required
              className="focus:ring-primary w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:ring-2"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="mb-1 text-sm text-white/70">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              required
              rows={4}
              className="focus:ring-primary min-h-[98px] w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:ring-2"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="bg-primary hover:bg-primary/80 disabled:hover:bg-primary w-full rounded-md py-2 text-white/90 transition disabled:opacity-50"
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                {' '}
                <TbLoader className="animate-spin-slow text-xl" /> Sending...
              </span>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
