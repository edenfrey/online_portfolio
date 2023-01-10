export default{
    name: 'testimonials',
    type: 'document',
    title: 'Testimonials',
    fields: [

        {
            name : 'name',
            type: 'string',
            title: 'Name',
        },

        {
            name : 'company',
            type: 'string',
            title: 'Company',
        },

        {
            name : 'imageurl',
            type: 'image',
            title: 'ImageURL',
            options: {
                hotspot: true,
            },
        },

        {
            name : 'comment',
            type: 'string',
            title: 'Comment',
        },
        
    ]
}