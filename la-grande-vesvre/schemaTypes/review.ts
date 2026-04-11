export default {
  name: 'review',
  title: 'Avis Clients',
  type: 'document',
  fields: [
    { name: 'author', title: 'Nom du client', type: 'string' },
    { name: 'origin', title: 'Provenance (ex: Belgique)', type: 'string' },
    {
      name: 'room',
      title: 'Chambre occupée',
      type: 'reference',
      to: [{ type: 'room' }],
    },
    // --- NOUVEAUX CHAMPS : DÉTAILS DU SÉJOUR ---
    {
      name: 'nights',
      title: 'Nombre de nuits',
      type: 'number',
      validation: (Rule: any) => Rule.min(1),
    },
    {
      name: 'travelerType',
      title: 'Type de voyageur',
      type: 'string',
      options: {
        list: [
          { title: 'En couple 👩‍❤️‍👨', value: 'couple' },
          { title: 'En famille 👨‍👩‍👧‍👦', value: 'family' },
          { title: 'Entre amis 🍻', value: 'friends' },
          { title: 'Voyageur solo 🧘', value: 'solo' },
        ],
      },
    },
    {
      name: 'approved',
      title: 'Approuver cet avis',
      type: 'boolean',
      description: 'L’avis ne sera visible sur le site que si cette case est cochée.',
      initialValue: false,
    },
    // ------------------------------------------
    { name: 'date', title: 'Date de l’avis', type: 'date' },
    { name: 'rating', title: 'Note (sur 10)', type: 'number', validation: (Rule: any) => Rule.min(0).max(10) },
    { name: 'title', title: 'Titre de l’avis', type: 'string' },
    {
      name: 'positive',
      title: 'Points positifs',
      type: 'text',
      rows: 3
    },
    {
      name: 'negative',
      title: 'Points négatifs / Remarques',
      type: 'text',
      rows: 3
    },
    {
      name: 'reply',
      title: 'Réponse de l’hôte',
      type: 'text',
      description: 'Votre réponse au commentaire du client.',
      rows: 3,
    },
    {
      name: 'replyDate',
      title: 'Date de la réponse',
      type: 'date',
      initialValue: () => new Date().toISOString().split('T')[0],
    }
  ],
  preview: {
    select: {
      title: 'author',
      subtitle: 'room.title',
    },
  },
}