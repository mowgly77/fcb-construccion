import { Helmet } from 'react-helmet-async';
import { SITE_URL } from '../data/services.js';

export default function SEO({ title, description, canonical, ogImage = '/img/obra-fachada.webp', schema }) {
  const url = canonical ? `${SITE_URL}${canonical}` : SITE_URL;
  const schemas = Array.isArray(schema) ? schema : schema ? [schema] : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${SITE_URL}${ogImage}`} />
      <meta property="og:locale" content="es_MX" />
      <meta property="og:url" content={url} />
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(s)}</script>
      ))}
    </Helmet>
  );
}
