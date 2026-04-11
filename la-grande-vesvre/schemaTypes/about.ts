export default {
  name: 'about',
  title: 'À propos',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre de la page',
      type: 'string',
      initialValue: 'Une nouvelle vie pour la Grande Vesvre',
    },
    {
      name: 'mainImage',
      title: 'Photo de présentation',
      type: 'image',
      description: 'Photo de présentation, articles...',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string', title: 'Texte alternatif' }]
    },
    {
      name: 'story',
      title: 'Notre Histoire',
      type: 'array', 
      of: [{ type: 'block' }], // Permet de faire des paragraphes, gras, listes...
    },
    {
      name: 'quote',
      title: 'Citation / Phrase clé',
      type: 'string',
      description: 'Une phrase qui résume votre philosophie (ex: Retour à l’essentiel).',
    },
    // --- SECTION PRESSE ---
    {
      name: 'pressTitle',
      title: 'Titre section Presse',
      type: 'string',
      initialValue: 'Ils parlent de nous',
    },
    {
      name: 'pressImage',
      title: 'Image de l’article de presse',
      type: 'image',
      fields: [{ name: 'alt', type: 'string', title: 'Texte alternatif' }]
    },
    {
      name: 'pressLink',
      title: 'Lien vers l’article (URL)',
      type: 'url',
    },
  ],
}