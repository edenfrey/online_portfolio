export default{
    name: "skills",
    type: "document",
    title: "Skills",
    fields: [
        
        {
            name: "title",
            type: "string",
            title: "Title"
        },
        {
            name: "imageurl",
            type: "image",
            title: "ImageURL",
            options: {
                hotspot: true,
            },
        },
        {
            name: 'description',
            type: 'string',
            title: 'Description'
        }
    ],
}