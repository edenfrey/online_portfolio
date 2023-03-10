export default{
    name: 'qualifications',
    type: 'document',
    title: 'Qualifications',
    fields: [

        {
            name: 'name',
            type: 'string',
            title: 'Name',
        },
        {
            name: 'status',
            type: 'string',
            title: 'Status',
            options: {
                list: [
                    { title: 'Not Started', value: 'not_started' },
                    { title: 'Ongoing',     value: 'ongoing' },
                    { title: 'Achieved',     value: 'achieved' },
                ],
            }
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
            name: 'date',
            type: 'date',
            title: 'Date',
        },
        {
            name: 'description',
            type: 'string',
            title: 'Description'
        },
    ]
}