import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpeg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'Hi I am  Gautam Manak, a Developer Advocate, Full Stack Engineer, and Community Builder based in India 🇮🇳.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
  <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
  <span className="inline-block animate-wave origin-[70%_70%]">👋</span> Hello World 
<br />
    I'm   <span className="custom-text">gαυтαм мαηαк</span> 
  </h1>
  <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
    <p>
      Hello! I'm Gautam Manak, a passionate Full Stack Web Developer with 2-3 years of experience in the web development landscape. I have a deep love for JavaScript , TypeScript and spend most of my time working with React.js, and Node.js. However, my curiosity and eagerness to learn never keep me confined to one technology. You'll often find me exploring and learning about various fields such as Technology.
    </p>
    <p>
      🔭 <strong>Current Role:</strong> I'm currently contributing to exciting projects at Fetch.ai.
    </p>
    <p>
      🌱 <strong>Learning Journey:</strong> At the moment, I'm diving deeper into Node.js, Next.js,Python and AI  to expand my skill set.
    </p>
    <p>
      📝 <strong>Writing:</strong> I regularly share my insights and knowledge through articles on Medium: <a href="https://medium.com/@gautammanak1" className="text-blue-500 hover:underline">Medium</a>.
    </p>
    <p>
      🤝 <strong>Mentoring:</strong> I mentor others on finding jobs, building communities, and organizing events and hackathons. For professional networking and mentoring, check out my Topmate profile: <a href="https://topmate.io/gautammanak1/" className="text-blue-500 hover:underline">Topmate</a>.
    </p>
    <p>
      💻 <strong>Tech Stack:</strong> <br />
      Languages & Frameworks: JavaScript, TypeScript, HTML, Python <br />
      Libraries & Tools: React.js, Node.js, Next.js, TailwindCSS, Firebase, MongoDB, Figma, NLP, AI Agents Creator
    </p>
  </div>
</div>


        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://x.com/gautammanak02" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink href="https://www.instagram.com/_half_engineer_01/" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="https://github.com/gautammanak1" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/gautammanak1/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:gautammanak1@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
             gautammanak1@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
