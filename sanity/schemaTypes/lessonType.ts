import { defineField, defineType } from 'sanity'

export const lessonType = defineType({
  name: 'lesson', // ✅ Use a unique name for the document type
  title: 'Lesson',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),

    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      description: 'The URL for the video player (e.g., YouTube, Vimeo)',
    }),

    defineField({
      name: 'loomUrl',
      title: 'Loom Share URL',
      type: 'url',
      description: 'The full Loom share URL (e.g., https://www.loom.com/share/...)',
      validation: (rule) =>
        rule.custom((value) => {
          if (!value) return true
          try {
            const url = new URL(value)
            if (!url.hostname.endsWith('loom.com')) {
              return 'URL must be from loom.com'
            }
            if (!url.pathname.startsWith('/share/')) {
              return 'URL must be a Loom share URL'
            }
            const videoID = url.pathname.split('/share/')[1]
            if (!/^[a-zA-Z0-9_-]{32,36}$/.test(videoID)) {
              return 'Invalid Loom video ID in the URL'
            }
            return true
          } catch {
            return 'Please enter a valid URL'
          }
        }),
    }),

    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
})