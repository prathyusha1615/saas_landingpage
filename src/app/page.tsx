import { Metadata } from 'next'
import Home from './Home' // update this path if needed

interface Props {
  params: { slug: string }
}

// ✅ Fix: add ({ params }: Props) as the argument
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params

  if (slug === 'saas-digital-marketing') {
    return {
      title: 'SaaS Digital Marketing Expert | Shitanshu Kumar',
      description:
        'Helping SaaS companies grow with digital marketing strategies built for MRR, CAC, and funnel efficiency.',
      robots: 'index, follow',
    }
  }

  return {
    title: 'SaaS Performance Marketing Expert | Shitanshu Kumar',
    description:
      'Helping SaaS brands scale with performance marketing that drives pipeline and revenue.',
    robots: 'noindex, nofollow',
  }
}

export default function SlugPage({ params }: Props) {
  return <Home slug={params.slug} />
}
