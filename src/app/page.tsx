import Home from './Home'

// ✅ Dynamic metadata based on slug
export async function generateMetadata() {
  return {
    title: "SaaS Performance Marketing Expert | Shitanshu Kumar",
    description:
      "Helping SaaS brands scale with performance marketing that drives pipeline and revenue.",
  };
}

export default function page() {
  return <Home slug="homepage" />
}
