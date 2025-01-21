import { type Metadata } from 'next'
import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import Skills from "@/components/SkillsSection"

// Helper function to calculate the duration
function calculateDuration(startDate: string): string {
  const start = new Date(startDate);
  const now = new Date();
  const months =
    (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
  return `${Math.max(0, months)} months`;
}

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
  eventStart,
  eventEnd,
  cta,
  href,
}: {
  title: string
  description: string
  eventStart: string
  eventEnd?: string 
  cta: string
  href: string
}) {
  const end = eventEnd || "Present";
  const duration = eventEnd
    ? calculateDuration(eventStart) + " - " + calculateDuration(eventEnd)
    : `${calculateDuration(eventStart)}`;

  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{`${eventStart} - ${end} (${duration})`}</Card.Eyebrow>
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
            eventStart="2024-05-01"
            cta="View details"
          />
          <Appearance
            href="https://fetch.ai/"
            title="Campus Ambassador"
            description="Conducted comprehensive workshops to educate and train participants on the functionalities and applications of uAgent Fetch.ai technology. Organized and hosted hackathons to foster innovation and encourage the development of new projects using Fetch.ai technologies. Led marketing campaigns to promote Fetch.ai products and technologies, increasing brand awareness and engagement within the tech community."
            eventStart="2023-12-01"
            cta="View details"
          />
        </SpeakingSection>

        <SpeakingSection title="MeerutCodeHub">
          <Appearance
            href="https://www.commudle.com/communities/meerut-code-hub"
            title="Community Lead"
            description="Located in the vibrant city of Meerut, India, Meerut Code Hub is not just a community; it's a thriving ecosystem for developers, coders, and tech enthusiasts! 🌟 Our mission is simple yet powerful: to foster learning, networking, and innovation within our community."
            eventStart="2022-12-01"
            cta="View details"
          />
        </SpeakingSection>

        <SpeakingSection title="KloudiDev Digital Solutions">
          <Appearance
            href="https://kloudidev.com/"
            title="Full Stack Engineer"
            description="As a Full Stack MERN Engineer at KloudiDev Digital Solutions, I contribute to the development of 2 innovative products, with a focus on Clean code quality and implementation. Team up with UX/UI designers for striking, responsive interfaces using Tailwind CSS."
            eventStart="2023-10-01"
            eventEnd="2024-05-01"
            cta="View details"
          />
        </SpeakingSection>

        <SpeakingSection title="Oasis Infobyte">
          <Appearance
            href=""
            title="Web Developer"
            description="Write custom HTML, PHP, CSS, and JavaScript for existing websites and applications. Design, recommend and pitch improvements to new and existing features. Assist in troubleshooting issues on web-based systems. Update and edit website content, posts, and pages."
            eventStart="2023-02-01"
            eventEnd="2023-03-01"
            cta="View details"
          />
        </SpeakingSection>
        <Skills />
      </div>
    </SimpleLayout>
  )
}
