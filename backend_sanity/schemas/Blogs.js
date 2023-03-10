export default{
    name: 'blogs',
    type: 'document',
    title:'Blogs',
    fields: [

        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'date',
            type: 'date',
            title: 'Date'
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