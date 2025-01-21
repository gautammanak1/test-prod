import { type Metadata } from 'next'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { ServicesSectionWithMotion } from '@/components/ServicesSectionWithMotion'
import { Bitcoin, Bot, ClipboardList, Github, LayoutDashboardIcon } from 'lucide-react'
const projects = [
  {
    name: 'GitHub Agent',
    description:
      'GitHub Agent simplifies managing GitHub repositories by automating detailed retrieval of information, issue creation, and repository comparison. It helps developers save time and streamline their workflows, improving overall productivity and project management.',
    link: { href: 'https://github.com/gautammanak1/git-agent', label: 'github.com' },
    logo: Github,
  },
  {
    name: 'GradPathAI',
    description:
      'GradPath AI is an AI-powered platform designed to help students and recent graduates transition from academia to industry. It offers personalized career guidance, resume analysis, job search assistance, mentorship connections, and more, all powered by Fetch.ai technology.',
    link: { href: 'https://github.com/gautammanak1/GradPathAI', label: 'github.com' },
    logo: Bot,
  },
  {
    name: 'Ai-Agents',
    description:
      'This repository contains a collection of AI agents developed using Fetch.ai technology, including uAgent, Agentverse, and DeltaV. Each agent is designed to perform specific tasks such as finding job listings, providing details about hackathons and events, recommending professional profiles, and retrieving vehicle details including challan information.',
    link: { href: 'https://github.com/gautammanak1/Fetch.ai-agents', label: 'github.com' },
    logo: Bot,
  },
  {
    name: 'To-Do List',
    description:
      'This is a simple To-Do List web application built with React and Firebase for user authentication. With this app, you can create and manage your to-do tasks securely using Firebase authentication. It provides a responsive and intuitive user interface for managing your tasks.',
    link: { href: 'https://github.com/gautammanak1/Todo-List', label: 'github.com' },
    logo: ClipboardList,
  },
  {
    name: 'Xcrypto App',
    description:
      'This is a crypto web App where you can check the all crypto currency present in the market with real time market price and the scaling percentage of the of the crypto currency with total market cap.',
    link: { href: 'https://xcrypto-app-ten.vercel.app/', label: 'xcrypto.app' },
    logo: Bitcoin,
  },
  {
    name: 'Periodic Table of Elements',
    description:
      'The periodic table is a tabular course of action of the chemical components by increasing atomic number which shows the components with the goal that one may see slants in their properties.',
    link: { href: 'https://gautammanak1.github.io/Periodic-Table-of-Elements/', label: 'periodic.table.com' },
    logo: LayoutDashboardIcon,
  },
  {
    name: 'MonkHood',
    description:
      'Utilize the comprehensive features of the platform to seamlessly create, edit, and delete events, appointments, and tasks,fostering collaboration by inviting others, all while strategically employing metrics to quantify impact, enhanceproductivity, and maintain a harmonious balance between professional and personal commitments.',
    link: { href: 'https://monkhood.vercel.app/', label: 'Monkhood.com' },
    logo: ClipboardList,
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Things I’ve made trying to put my dent in the universe.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Things I’ve made trying to put my dent in the universe."
      intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            <project.logo className="h-6 w-6" />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
            
          </Card>
        ))}
      </ul>
      <ServicesSectionWithMotion />
    </SimpleLayout>
  )
}
