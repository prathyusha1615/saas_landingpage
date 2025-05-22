'use client'

import useFaqs from './hooks/useFaqs'
import FAQS from '../../../_components/faqs/FAQS'

export default function Faqs({ slug }: { slug?: string }) {
  const { faqData } = useFaqs(slug)

  return <FAQS faqs={faqData} />
}
