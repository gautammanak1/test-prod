import { type Metadata } from 'next'
import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import  Skills  from "@/components/SkillsSection"

function SpeakingSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({
  title,
  description,
  event,
  cta,
  href,
}: {
  title: string
  description: string
  event: string
  cta: string
  href: string
}) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Professional experience and roles.',
}

export default function Experience() {
  return (
    <SimpleLayout
      title="Professional Experience"
      intro="Here are the roles and responsibilities I've undertaken throughout my career."
    >
      <div className="space-y-20">
        <SpeakingSection title="Fetch.ai">
          <Appearance
            href="https://fetch.ai/"
            title="Developer Advocate"
            description="As a Developer Advocate at Fetch.ai, I spearheaded workshops, hackathons, and marketing initiatives, equally splitting my efforts between development and marketing endeavors, leveraging expertise in MERN stack and Python technologies."
            event="May 2024 - Present (3 months), England, United Kingdom"
            cta="View details"
          />
          <Appearance
            href="https://fetch.ai/"
            title="Campus Ambassador"
            description="Conducted comprehensive workshops to educate and train participants on the functionalities and applications of uAgent Fetch.ai technology. Organized and hosted hackathons to foster innovation and encourage the development of new projects using Fetch.ai technologies. Led marketing campaigns to promote Fetch.ai products and technologies, increasing brand awareness and engagement within the tech community."
            event="December 2023 - Present (8 months), United Kingdom"
            cta="View details"
          />
        </SpeakingSection>

        <SpeakingSection title="MeerutCodeHub">
          <Appearance
            href="https://www.commudle.com/communities/meerut-code-hub"
            title="Community Lead"
            description="Located in the vibrant city of Meerut, India, Meerut Code Hub is not just a community; it's a thriving ecosystem for developers, coders, and tech enthusiasts! 🌟 Our mission is simple yet powerful: to foster learning, networking, and innovation within our community."
            event="December 2022 - Present (1 year 8 months), Meerut, Uttar Pradesh, India"
            cta="View details"
          />
        </SpeakingSection>

        <SpeakingSection title="KloudiDev Digital Solutions">
          <Appearance
            href="https://kloudidev.com/"
            title="Full Stack Engineer"
            description="As a Full Stack MERN Engineer at KloudiDev Digital Solutions, I contribute to the development of 2 innovative
products, with a focus on Clean code quality and implementation.
• Drove development of two products, emphasizing code quality and effective implementation. Team up with UX/UI
designers for striking, responsive interfaces using Tailwind CSS."
            event="October 2023 - May 2024 (8 months), Delhi, India"
            cta="View details"
          />
        </SpeakingSection>

        
        <SpeakingSection title="Oasis Infobyte">
          <Appearance
             href=""
            title="Web Developer"
            description="Write custom HTML, PHP, CSS, and JavaScript for existing websites and applications. Design, recommend and pitch improvements to new and existing features. Assist in troubleshooting issues on web-based systems. Update and edit website content, posts, and pages."
            event="February 2023 - March 2023 (2 months), Remote"
          cta="View details"
                
          />
        </SpeakingSection>
        <Skills/>
      </div>
    </SimpleLayout>
  )
}
