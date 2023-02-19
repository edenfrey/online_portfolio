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
            name: 'description',
            type: 'string',
            title: 'Description'
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