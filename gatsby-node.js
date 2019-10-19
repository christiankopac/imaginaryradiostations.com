// const path = require('path')
// const { createFilePath } = require('gatsby-source-filesystem')
//
// // Log out information after a build is done
// exports.onPostBuild = ({ reporter }) => {
//   reporter.info('Your Gatsby site has been built!')
// }
// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === 'MarkdownRemark') {
//     const slug = createFilePath({ node, getNode })
//     createNodeField({
//       node,
//       name: 'slug',
//     })
//     const audio = createFilePath({ node, getNode })
//     createNodeField({
//       node,
//       name: 'audio'
//     })
//   }
// }
//
// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions
//   return new Promise((resolve) => {
//     graphql(`
//       {
//         allMarkdownRemark {
//           edges {
//             node {
//               fields {
//                 slug
//                 audio
//               }
//             }
//           }
//         }
//       }
//     `).then((result) => {
//       result.data.allMarkdownRemark.edges.map(({ node }) => createPage({
//         path: node.fields.slug,
//         component: path.resolve('./src/templates/mix.jsx'),
//         context: {
//           slug: node.fields.slug,
//         },
//       }))
//       resolve()
//     })
//   })
// }

const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
    createNodeField({
      node,
      name: 'audio',
      value: audio,
    })
  }
}
const axios = require("axios")
const get = endpoint => axios.get(`https://pokeapi.co/api/v2${endpoint}`)
const getPokemonData = names =>
  Promise.all(
    names.map(async name => {
      const { data: pokemon } = await get(`/pokemon/${name}`)
      return { ...pokemon }
    })
  )
exports.createPages = async ({ actions: { createPage } }) => {
  const allPokemon = await getPokemonData(["pikachu", "charizard", "squirtle"])
  // Create a page that lists Pokémon.
  createPage({
    path: `/`,
    component: require.resolve("./src/templates/all-pokemon.js"),
    context: { allPokemon },
  })
}
