import Hero from '../components/home/Hero'
import ProgramHighlights from '../components/home/ProgramHighlights'
import WhoIsThisFor from '../components/home/WhoIsThisFor'
import HowItWorks from '../components/home/HowItWorks'
import OurCourses from '../components/home/OurCourses'
import WhyUs from '../components/home/WhyUs'
import AIHighlight from '../components/home/AIHighlight'
import FoundingBatch from '../components/home/FoundingBatch'
import FAQTeaser from '../components/home/FAQTeaser'
import CTASection from '../components/home/CTASection'
import { usePageMeta } from '../hooks/usePageMeta'

export default function Home() {
  usePageMeta(null, 'Balvirt Tech Hub — career-focused training across Java Full Stack + AI, NetSuite Functional, NetSuite Technical, and Generative AI, with placement-focused mentorship and hands-on projects.')

  return (
    <>
      <Hero />
      <ProgramHighlights />
      <WhoIsThisFor />
      <HowItWorks />
      <OurCourses />
      <WhyUs />
      <AIHighlight />
      <FoundingBatch />
      <FAQTeaser />
      <CTASection />
    </>
  )
}
