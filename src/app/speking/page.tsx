import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function EventSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Event({
  title,
  date,
  children,
}: {
  title: string
  date: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3">{title}</Card.Title>
      <Card.Description>{children}</Card.Description>
      <p className="text-sm text-gray-500">{date}</p>
    </Card>
  )
}

export const metadata = {
  title: 'Speaking Journey',
  description: 'Events, workshops, and hackathons I have spoken at or participated in.',
}

export default function SpeakingJourney() {
  return (
    <SimpleLayout
      title="My Speaking Journey"
      intro="A collection of events, hackathons, and workshops where I have shared knowledge about AI, decentralized networks, and Fetch.ai technology."
    >
      <div className="space-y-20">
        <EventSection title="December 2024">
          <Event title="Fetch.ai Innovation Lab at Thoughtworks, Gurugram" date="14 Dec 2024">
            Led a deep dive session exploring autonomous agents, decentralized AI networks, and AI-driven solutions.
          </Event>
        </EventSection>

        <EventSection title="November 2024">
          <Event title="Hack It Out Hackathon at IIT Patna" date="11 Nov 2024">
            Mentored teams using Fetch.ai’s AI Agents technology to solve real-world problems alongside Dev Chauhan and Kshipra Dhame.
          </Event>
        </EventSection>

        <EventSection title="October 2024">
          <Event title="Celesta Tech Fest at IIT Patna" date="18 Oct 2024">
            Represented Fetch.ai Innovation Lab at the closing ceremony of Celesta, engaging with an energetic crowd.
          </Event>
          <Event title="Fetchathon 2.0 at NIT Delhi" date="15 Oct 2024">
            Sponsored and mentored participants at the Fetch.ai-powered hackathon, guiding teams on using Fetch.ai technology.
          </Event>
          <Event title="Agents 101 Workshop at CCSU, Meerut" date="14 Oct 2024">
            Conducted a foundational workshop introducing participants to AI agents and decentralized AI.
          </Event>
          <Event title="Tech Udyam at IPEC Ghaziabad" date="5 Oct 2024">
            Sponsored a hackathon track, inspiring the next generation of developers with mentoring sessions.
          </Event>
          <Event title="Fetch.ai Workshop at GDG On Campus MGMCOET, Noida" date="4 Oct 2024">
            Hosted a session on autonomous agents, empowering students to explore decentralized AI technology.
          </Event>
          <Event title="AI Agent Workshop at GL Bajaj, Noida" date="3 Oct 2024">
            Held a hands-on workshop introducing students to AI agents and their applications in real-world scenarios.
          </Event>
        </EventSection>

        <EventSection title="September 2024">
          <Event title="Fetch.ai Hackathon at IIT Guwahati" date="September 2024">
            Mentored and judged the Fetch.ai Hackathon, witnessing innovative AI and blockchain projects.
          </Event>
          <Event title="Fetch.ai Innovation Lab Opening at MIET, Meerut" date="September 2024">
            Showcased GradPath AI, an AI-powered career guidance project developed during my internship.
          </Event>
          <Event title="Fetch.ai Session at PIET, Panipat" date="September 2024">
            Delivered a session on Fetch.ai technology, Agent 101, and innovative projects.
          </Event>
          <Event title="AI Agents Meetup at MIET, Meerut" date="September 2024">
            Engaged in discussions on AI agents and explored projects built using Fetch.ai.
          </Event>
        </EventSection>

        <EventSection title="Other Talks">
          <Event title="Azure Talk at Microsoft Office" date="TBA">
            Spoke on Azure and AI agent technologies.
          </Event>
          <Event title="Azure and AI Agent Talk at VIT Aligarh" date="TBA">
            Delivered insights on AI agents and cloud computing.
          </Event>
          <Event title="Firebase Talk at Dewan VS Institute of Engineering and Technology, Meerut" date="TBA">
            Shared knowledge on Firebase integration and its applications.
          </Event>
          <Event title="AI Agent Talk at GNIOT Greater Noida" date="TBA">
            Conducted a session on AI agent use cases and decentralized AI.
          </Event>
        </EventSection>
      </div>
    </SimpleLayout>
  )
}
