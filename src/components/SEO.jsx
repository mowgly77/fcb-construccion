import { Helmet } from 'react-helmet-async';
import { SITE_URL } from '../data/services.js';

export default function SEO({ title, description, canonical, ogImage = '/img/obra-fachada.webp', schema }) {
  const url = canonical ? `${SITE_URL}${canonical}` : SITE_URL;

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
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
}
