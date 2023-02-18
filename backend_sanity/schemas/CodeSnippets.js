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
            name: 'code',
            type: 'file',
            title: 'Code'
        },
        {
            name: 'Functionality',
            type: 'string',
            title: 'Functionality'
        }
    ]
}