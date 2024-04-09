import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'produkt',
  title: 'Produkt',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Navn',
      type: 'string',
    }),
    defineField({
      name: 'pris',
      title: 'Pris',
      type: 'number',
    }),
    defineField({
      name: 'bilde',
      title: 'Bilde',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'Kategori',
      title: 'Kategori',
      type: 'array',
      of: [{type: 'reference', to: {type: 'kategori'}}],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
