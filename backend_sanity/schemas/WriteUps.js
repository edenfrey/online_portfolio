export default{
    name: "write_ups",
    type: "document",
    title: "Write-Ups",
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
            name: "summary",
            type: "string",
            title: "Summary",
        },
    ],
}