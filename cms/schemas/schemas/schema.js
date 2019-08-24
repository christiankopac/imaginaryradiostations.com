// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import category from './category'
import pages from './pages'
import author from './author'

import music from './music'
import event from './event'
import contactDetails from './contactDetails'
import audio from './audio'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
    // The follLowing are document types which will appear
      // in the studio.
      pages,
      event,
      music,
        audio,
      contactDetails,
    author,
    category,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent
  ])
})
