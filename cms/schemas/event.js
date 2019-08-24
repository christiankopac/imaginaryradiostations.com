export default {
    name: 'event',
    title: 'Event',
    type: 'document',
    fields: [
        {
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
            name: 'Location',
            title: 'Location',
            type: 'string'
        },
        {
            name: 'geo',
            title: 'Geolocation',
            type: 'geopoint'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image'
        },
        {
            name: 'date',
            title: 'Date',
            type: 'date'
        },
        {
            name: 'starttime',
            title: 'Starts at',
            type: 'datetime'
        },
        {
            name: 'endtime',
            title: 'Ends at',
            type: 'datetime'
        },
        {
            name: 'lineup',
            title: 'Lineup',
            type: 'array',
            of: [{type: 'string'}]
        },
        {
            name: 'body',
            title: 'Body',
            type: 'blockContent'
        },
        {
            name: 'facebook',
            title: 'facebook',
            type: 'url',
        },
        {
            name: 'ra',
            title: 'Resident Advisor',
            type: 'url'
        }
    ]
}
