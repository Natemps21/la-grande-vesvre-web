export default {
  name: 'room',
  title: 'Chambres',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Nom de la chambre',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'colorTheme',
      title: 'Thème et Palette de couleurs',
      type: 'string',
      description: 'Sélectionnez l’identité visuelle unique de la chambre.',
      options: {
        list: [
          { title: 'Forêt (Vert / Nature / Bois)', value: 'foret' },
          { title: 'Bateau (Bleu / Marine / Évasion)', value: 'bateau' },
          { title: 'Hirondelle (Rouge / Passion / Tradition)', value: 'hirondelle' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    },
    // --- SECTION TARIFS ---
    {
      name: 'priceStandard',
      title: 'Tarif 1 : Non remboursable (€)',
      type: 'number',
      description: 'Petit-déjeuner compris, paiement en ligne, non remboursable.',
      validation: (Rule: any) => Rule.required().min(0),
    },
    {
      name: 'priceFlexible',
      title: 'Tarif 2 : Annulation gratuite (€)',
      type: 'number',
      description: 'Petit-déjeuner compris, annulation gratuite, paiement différé.',
      validation: (Rule: any) => Rule.required().min(0),
    },
    // ----------------------
    {
      name: 'surface',
      title: 'Surface (m²)',
      type: 'number',
    },
    {
      name: 'capacity',
      title: 'Capacité (personnes)',
      type: 'number',
    },
    {
      name: 'beds',
      title: 'Type de lits',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    },
    {
      name: 'images',
      title: 'Galerie photos de la chambre',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    {
      name: 'features',
      title: 'Équipements',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Petit-déjeuner compris', value: 'breakfast' },
          { title: 'Cuisine privative', value: 'cuisine' },
          { title: 'Machine à café', value: 'cafe' },
          { title: 'Lave-vaisselle', value: 'lavevaisselle' },
          { title: 'Salle de bains privative', value: 'sdb' },
          { title: 'Baignoire', value: 'Baignoire' },
          { title: 'Vue sur une cour intérieure', value: 'vuecours' },
          { title: 'Vue sur le jardin', value: 'vuejardin' },
          { title: 'Wi-Fi Gratuit', value: 'wifi' },
        ],
      },
    },
  ],
}