import Home from '../Home';

// ✅ The route component must ALSO await `params`
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <Home slug={slug} />;
}
