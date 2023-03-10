export default{
    name: 'guides',
    type: 'document',
    title:'Guides',
    fields: [

        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'summary',
            type: 'string',
            title: 'Summary'
        },
        {
            name: 'imageurl',
            type: 'image',
            title: 'ImageURL'
        },
        {
            name: 'content',
            type: 'string',
            title: 'Content'
        }
    ]
}