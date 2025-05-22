// app/[slug]/page.tsx
import {
  Accelerate,
  Faqs,
  Founders,
  Growth,
  Hello,
  LetsWork,
  Performance,
  Proven,
  Saas,
  Services,
  Tools
} from './_components'

interface HomeProps {
  slug?: string;
}

export default function DynamicPage({ slug  }: HomeProps) {

  return (
    <>
      <Accelerate />
      <Performance />
      <Services slug={slug} /> {/* Pass slug here */}
      <Proven />
      <Saas />
      <Hello />
      <Tools />
      <Founders />
      <Growth />
      <LetsWork />
      <Faqs slug={slug} />
    </>
  )
}
