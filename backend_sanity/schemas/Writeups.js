export default{
    name: "writeups",
    type: "document",
    title: "Write-ups",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title"
        },
        {
            name: "url",
            type: "url",
            title: "URL"
        },
        {
            name: "doc",
            type: "file",
            title: "Write-up Document"
        },

        {
            name: "gist",
            type: "string",
            title: "Gist",
        },
    ],
}