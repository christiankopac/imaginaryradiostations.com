export default {
    name: 'audio',
    title: 'Audio',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Titlte',
            type: 'string'
        },
        {
            name: 'file',
            title: 'File',
            type: 'file',
            fields: [
                {
                    name: 'description',
                    type: 'string',
                    title: 'Description'
                },
            ]
        },
        {
            name: 'image',
            title: 'Image',
            type: 'file'
        }
    ]
}
