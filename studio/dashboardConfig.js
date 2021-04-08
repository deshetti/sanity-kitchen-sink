export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '606efccca0cd04dbc53da3df',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-nrfsjo7n',
                  apiId: '49c570db-5d1c-42e8-b5f6-6f5f92f513e0'
                },
                {
                  buildHookId: '606efccca0cd04d5ab3dab81',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-716jf5mh',
                  apiId: '5688994c-f993-404c-9c10-775791d80b1a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/deshetti/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-716jf5mh.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
