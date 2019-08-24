export default {
    name: 'music',
    title: 'Music',
    type: 'document',
    fields: [{
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96
            }
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{
                type: 'reference',
                to: {
                    type: 'category'
                }
            }]
        },
        {
            name: 'soundcloud',
            title: 'Soundcloud',
            type: 'url'
        },
        {
            name: 'bandcamp',
            title: 'Bandcamp',
            type: 'url'
        },
        {
            name: 'youtube',
            title: 'YouTube',
            type: 'url'
        },
        {
            name: 'mixcloud',
            title: 'Mixcloud',
            type: 'url'
        },
        {
            name: 'body',
            title: 'Body',
            type: 'blockContent'
        }
    ],
    preview: {
        select: {
            title: 'title',
            media: 'image'
        },
        prepare(selection) {
            const {
                title,
                media
            } = selection
            return {
                title: title,
                subtitle: media
            }
        }
    }
}
