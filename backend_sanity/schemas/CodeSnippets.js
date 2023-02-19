export default{
    name: 'codesnippets',
    type: 'document',
    title:'Code Snippets',
    fields: [

        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'description',
            type: 'string',
            title: 'Description'
        },
        {
            name: 'code',
            type: 'file',
            title: 'Code'
        },
        {
            name: 'function',
            type: 'string',
            title: 'Function'
        }
    ]
}