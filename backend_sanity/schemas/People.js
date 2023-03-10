export default{
    name: 'people',
    type: 'document',
    title: 'People',
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
            name : 'description',
            type: 'string',
            title: 'Description',
        },
        
    ]
}