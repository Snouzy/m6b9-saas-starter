export default async function PublicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return <div>Page publique de {slug}</div>;
}
