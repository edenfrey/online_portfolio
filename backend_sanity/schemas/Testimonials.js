export default{
    name: 'testimonials',
    type: 'document',
    title: 'Testimonials',
    fields: [

        {
            name: 'person',
            type: 'people',
            title: 'Person',
        },

        {
            name : 'comment',
            type: 'string',
            title: 'Comment',
        },
        
    ]
}