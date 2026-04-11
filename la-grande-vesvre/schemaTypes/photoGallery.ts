export default {
  name: 'photoGallery',
  title: 'Galerie Photos',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre image', // C'est le label qui apparaîtra dans l'admin
      type: 'string',
      description: 'Donnez un nom clair à cette image (ex: Façade avant drone)'
    },
    {
      name: 'image',
      title: 'Fichier Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'category',
      title: 'Categorie',
      type: 'string',
      options: {
        list: [
          { title: 'Chambres', value: 'chambres' },
          { title: 'Exterieur', value: 'exterieur' },
          { title: 'Histoire', value: 'histoire' },
          { title: 'Restaurants', value: 'restaurants' },
        ],
      },
    },
    {
      name: 'alt',
      title: 'Texte alternatif (SEO)',
      type: 'string',
      description: 'Decrivez precisement limage pour Google (ex: Vue aerienne de la ferme templiere de la Grande Vesvre).'
    }
  ]
}