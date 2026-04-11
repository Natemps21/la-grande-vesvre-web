export default {
  name: 'attraction',
  title: 'Lieux à visiter',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nom du lieu',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          { title: 'Châteaux 🏰', value: 'chateau' },
          { title: 'Vignobles & Terroir 🍷', value: 'vignoble' },
          { title: 'Cités & Patrimoine ⚔️', value: 'patrimoine' },
          { title: 'Nature & Détente 🌳', value: 'nature' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    },
    {
      name: 'images',
      title: 'Galerie photos',
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
              description: 'Décrivez l\'image pour Google.',
            },
          ],
        },
      ],
    },
    // --- SECTION PROUVE SOCIALE (GOOGLE) ---
    {
      name: 'rating',
      title: 'Note Google (ex: 4.8)',
      type: 'number',
      description: 'La note sur 5 étoiles.',
      validation: (Rule: any) => Rule.min(0).max(5),
    },
    {
      name: 'reviewsCount',
      title: 'Nombre d’avis',
      type: 'number',
      description: 'Ex: 250 avis Google.',
    },
    // --- INFOS PRATIQUES ---
    {
      name: 'website',
      title: 'Site officiel',
      type: 'url',
    },
    {
      name: 'distance',
      title: 'Distance (km)',
      type: 'string',
      description: 'Ex: 15 km',
    },
    {
      name: 'travelTime',
      title: 'Temps de trajet (min)',
      type: 'string',
      description: 'Ex: 16 min',
    },
    // --- HORAIRES ---
    {
      name: 'openingHours',
      title: 'Horaires d’ouverture',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { 
              name: 'day', 
              title: 'Jour', 
              type: 'string', 
              options: { list: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'] } 
            },
            { name: 'openMorning', title: 'Ouverture (Matin ou Début)', type: 'string', description: 'ex: 09:00' },
            { name: 'closeMorning', title: 'Fermeture Midi (Optionnel)', type: 'string' },
            { name: 'openEvening', title: 'Réouverture Soir (Optionnel)', type: 'string' },
            { name: 'closeEvening', title: 'Fermeture (Fin de journée)', type: 'string', description: 'ex: 18:30' },
            { name: 'isClosed', title: 'Fermé toute la journée ?', type: 'boolean' },
          ]
        }
      ]
    },
    {
      name: 'address',
      title: 'Adresse complète',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Numéro de téléphone',
      type: 'string',
    },
    {
      name: 'googleMapsUrl',
      title: 'Lien Google Maps',
      type: 'url',
    },
  ],
}