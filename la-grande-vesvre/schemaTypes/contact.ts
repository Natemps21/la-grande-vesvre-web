export default {
  name: 'contact',
  title: 'Infos Établissement & Saison',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Nom du site / Établissement',
      type: 'string',
      initialValue: 'La Grande Vesvre',
    },
    // --- SECTION ÉVALUATIONS (GLOBALES) ---
    {
      name: 'rating',
      title: 'Note Globale (ex: 4.9)',
      type: 'number',
      description: 'Note moyenne de l’établissement (Booking, Google, etc.).',
      validation: (Rule: any) => Rule.min(0).max(5),
    },
    {
      name: 'reviewsCount',
      title: 'Nombre total d’avis',
      type: 'number',
      description: 'Ex: 156 avis certifiés.',
    },
    {
      name: 'descriptionGenerale',
      title: 'Texte d’introduction (Pitch)',
      type: 'text',
      description: 'Le texte qui décrit l’emplacement et les services généraux.',
      rows: 5,
    },
    // --- POINTS FORTS ---
    {
      name: 'features',
      title: 'Points forts de l’établissement',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Nom du service', type: 'string', description: 'Ex: Parking gratuit' },
            { 
              name: 'icon', 
              title: 'Icône (Nom)', 
              type: 'string', 
              description: 'Nom de l’icône (ex: wifi, car, coffee, map-pin, dog-off)' 
            }
          ]
        }
      ]
    },
    // --- SECTION POLITIQUES D'ARRIVÉE ---
    {
      name: 'checkInTime',
      title: 'Heure d’arrivée (Check-in)',
      type: 'string',
      description: 'Ex: 17:00 - 20:00',
    },
    {
      name: 'checkOutTime',
      title: 'Heure de départ (Check-out)',
      type: 'string',
      description: 'Ex: Avant 11:00',
    },
    // --- COORDONNÉES & RÉSERVATION ---
    {
      name: 'photo',
      title: 'Photo d’accueil / Contact',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'phone',
      title: 'Téléphone',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Adresse complète',
      type: 'string',
    },
    {
      name: 'bookingUrl',
      title: 'Lien Booking.com',
      type: 'url',
    },
    // --- SAISON ---
    {
      name: 'seasonStatus',
      title: 'Période d’ouverture',
      type: 'string',
      description: 'Ex: Ouvert du 1er mai au 31 octobre',
    },
  ],
}