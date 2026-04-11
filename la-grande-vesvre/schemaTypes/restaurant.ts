export default {
  name: 'restaurant',
  title: 'Restaurants',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nom du restaurant',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'order',
      title: 'Ordre d’affichage',
      type: 'number',
      description: 'Plus le chiffre est petit, plus il apparaît haut (ex: 1 pour Le Magny).',
    },
    {
      name: 'openingHours',
      title: 'Horaires d’ouverture',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'day', title: 'Jour', type: 'string', options: { list: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'] } },
            { name: 'openMorning', title: 'Ouverture Matin (ex: 12:00)', type: 'string' },
            { name: 'closeMorning', title: 'Fermeture Matin (ex: 14:30)', type: 'string' },
            { name: 'openEvening', title: 'Ouverture Soir (ex: 19:00)', type: 'string' },
            { name: 'closeEvening', title: 'Fermeture Soir (ex: 22:30)', type: 'string' },
            { name: 'isClosed', title: 'Fermé toute la journée ?', type: 'boolean' },
          ]
        }
      ]
    },
    {
      name: 'services',
      title: 'Services proposés',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Sur place 🍽️', value: 'dine-in' },
          { title: 'Vente à emporter 🥡', value: 'takeaway' },
          { title: 'Livraison 🚚', value: 'delivery' },
        ],
        layout: 'grid'
      },
    },
    {
      name: 'priceRange',
      title: 'Fourchette de prix',
      type: 'string',
      description: 'Budget moyen par personne.',
      options: {
        list: [
          { title: 'Économique (€) - Moins de 20€', value: '1' },
          { title: 'Abordable (€€) - Entre 20€ et 40€', value: '2' },
          { title: 'Haut de gamme (€€€) - Plus de 40€', value: '3' },
          { title: 'Gastronomique (€€€€)', value: '4' },
        ],
      },
    },
    {
      name: 'rating',
      title: 'Note Google (ex: 4.5)',
      type: 'number',
      description: 'La note sur 5 affichée sur Google Maps.',
      validation: (Rule: any) => Rule.min(0).max(5),
    },
    {
      name: 'reviewsCount',
      title: 'Nombre d’avis',
      type: 'number',
      description: 'Ex: 124 (affiché à côté des étoiles).',
    },
    {
      name: 'isHotel',
      title: 'Fait aussi Hôtel ?',
      type: 'boolean',
      description: 'Activez ceci pour afficher un badge "Hôtel" sur la fiche.',
      initialValue: false,
    },
    {
      name: 'description',
      title: 'Accroche / Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'style',
      title: 'Style / Cuisine',
      type: 'string',
    },
    {
      name: 'images',
      title: 'Galerie photos du restaurant',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Texte alternatif (SEO)',
            },
          ],
        },
      ],
    },
    {
      name: 'website',
      title: 'Site Web du restaurant',
      type: 'url',
      description: 'Facultatif. Laissez vide s’ils n’ont pas de site.',
    },
    {
      name: 'address',
      title: 'Adresse complète',
      type: 'string',
    },
    {
      name: 'distance',
      title: 'Distance (km)',
      type: 'string',
    },
    {
      name: 'travelTime',
      title: 'Temps de trajet (min)',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Numéro de téléphone',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email de contact',
      type: 'string',
    },
    {
      name: 'googleMapsUrl',
      title: 'Lien Google Maps',
      type: 'url',
    },
  ],
}