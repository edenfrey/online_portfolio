export default{
    name: 'blogs',
    type: 'document',
    title:'Blogs',
    fields: [

        {
            name: 'title',
            type: 'string',
            title: 'Blog Title'
        },
        {
            name: 'date',
            type: 'date',
            title: 'Date'
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
            title: 'Blog Content'
        }
    ]
}