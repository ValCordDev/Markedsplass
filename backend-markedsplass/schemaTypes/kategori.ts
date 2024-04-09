import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'kategori',
  title: 'Kategori',
  type: 'document',
  fields: [
    defineField({
      name: 'kategori',
      title: 'Kategori',
      type: 'string',
    }),
  ],
})
