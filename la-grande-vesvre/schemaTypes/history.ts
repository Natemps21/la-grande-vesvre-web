export default {
  name: 'history',
  title: 'Page Histoire',
  type: 'document',
  fields: [
    {
      name: 'mainTitle',
      title: 'Gros Titre de la page',
      type: 'string',
      initialValue: 'Histoire de la Grande Vesvre',
    },
    {
      name: 'sections',
      title: 'Sections de la page',
      type: 'array',
      of: [
        // --- BLOC TEXTE + IMAGE (Alterné) ---
        {
          type: 'object',
          name: 'textImageBlock',
          title: 'Paragraphe avec Image',
          fields: [
            { name: 'title', title: 'Titre du paragraphe (Gras)', type: 'string' },
            { name: 'content', title: 'Corps du message', type: 'text', rows: 5 },
            { name: 'image', title: 'Image associée', type: 'image', options: { hotspot: true } },
            { 
              name: 'layout', 
              title: 'Disposition du texte', 
              type: 'string', 
              options: { 
                list: [
                  { title: 'Texte à Gauche / Image à Droite', value: 'left' },
                  { title: 'Image à Gauche / Texte à Droite', value: 'right' }
                ] 
              },
              initialValue: 'left'
            }
          ]
        },
        // --- BLOC CITATION (Aération) ---
        {
          type: 'object',
          name: 'quoteBlock',
          title: 'Citation (Intermède)',
          fields: [
            { name: 'text', title: 'Texte de la citation', type: 'string' },
            { name: 'author', title: 'Auteur (Optionnel)', type: 'string' }
          ]
        },
        // --- BLOC IMAGE PLEINE LARGEUR (Aération) ---
        {
          type: 'object',
          name: 'centerImageBlock',
          title: 'Grande Image de milieu',
          fields: [
            { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
            { name: 'caption', title: 'Légende (Optionnel)', type: 'string' }
          ]
        }
      ]
    }
  ]
}