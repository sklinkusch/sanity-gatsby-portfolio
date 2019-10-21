export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5dada0f853454dc7518572df',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-p9mftbxe',
                  apiId: 'f0cb67d3-46df-490c-b179-959dd52d1eff'
                },
                {
                  buildHookId: '5dada0f837ec7a6458740002',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-kf7u5y66',
                  apiId: 'dcfecf6e-dcda-4736-8529-244a876805f9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sklinkusch/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-kf7u5y66.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
