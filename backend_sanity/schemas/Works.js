export default{
    name: "works",
    type: "document",
    title: "Works",
    fields: [
        
        {
            name: "name",
            type: "string",
            title: "Name"
        },
        {
            name: "date",
            type: "date",
            title: "Date"
        },
        {
            name: "project_url",
            type: "url",
            title: "Project URL"
        },
        {
            name: "description",
            type: "string",
            title: "Description"
        },
        {
            name: "imageurl",
            type: "image",
            title: "ImageURL",
            options: {
                hotspot: true,
            },
        },

    ],
}