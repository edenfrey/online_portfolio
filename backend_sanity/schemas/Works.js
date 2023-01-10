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
            name: "dateofcompletion",
            type: "date",
            title: "DateOfCompletion"
        },

        {
            name: "projecturl",
            type: "url",
            title: "ProjectURL"
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