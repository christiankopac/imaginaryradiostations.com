# gatsby-starter-default
The default Gatsby starter

For an overview of the project structure please refer to the [Gatsby documentation - Building with Components](https://www.gatsbyjs.org/docs/building-with-components/)

Install this starter (assuming Gatsby is installed) by running from your CLI:
```
gatsby new gatsby-example-site
```

## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)
# Imaginary Radio Stations 

## https://imaginaryradiostations.com

  - home
  - about
  - contact
  - mixes
    - IRS # 001
    - Evano
    - Lorem Ipsum type of bullshit Imaginary Radio Stations is a project by three Slovenian music enthusiasts, DJs and artists, founded in Berlin. Its existence is as an expression of pure intent without fitting into flavor-of-the-week hype columns, purist approaches 
    - https://soundcloud.com/evano/

## Components

  Elements that are repeated or reused across the page (f.e. menu)
  - Menu
  - Animated Title

## Templates

  blog-post.js would be an example of a template. Is the default structure for the blog post type.
  - mix.js

## Layouts



## Pages

- index
- about
- contact
- mixes

## Utils

- Typography.js

## CSS

## Plugins

### Official plugins

- gatsby-plugin-catch-links
  Intercepts local links from markdown and other non-react pages and does a client-side pushState to avoid the browser having to refresh the page.
- gatsby-plugin-feed
  Create an RSS feed (or multiple feeds) for your Gatsby site.
- gatsby-plugin-glamor
  Provide drop-in support for using the css-in-js library Glamor including optimized server rendering.

  In addition, you can also use this plugin to make glamorous 💄 work with server side rendering and start writing React components that carry their styles with them.
- gatsby-plugin-google-analytics
  Easily add Google Analytics to your Gatsby site.
- gatsby-plugin-google-tagmanager
  Easily add Google Tagmanager to your Gatsby site.
- gatsby-plugin-jss
  Provide drop-in support for using the css-in-js library JSS including server rendering.
- gatsby-plugin-manifest
  Adds support for shipping a manifest.json with your site. The web application manifest is a simple JSON file that lets users (on Android Chrome — support in MS Edge & Firefox is under development) save your web application to their smartphone home screen so it behaves similar to native apps.

  This article from the Chrome DevRel team is a good intro to the web app manifest—https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/

  If you’re using this plugin together with gatsby-plugin-offline (recommended), this plugin should be listed before the offline plugin so that it can cache the created manifest.json.
- gatsby-plugin-nprogress
  Automatically shows the nprogress indicator when a page is delayed in loading (which Gatsby considers as one second after clicking on a link).
- gatsby-plugin-offline
  Adds drop-in support for making a Gatsby site work offline and more resistant to bad network connections. It creates a service worker for the site and loads the service worker into the client.

  If you’re using this plugin with gatsby-plugin-manifest (recommended) this plugin should be listed after that plugin so the manifest file can be included in the service worker.
- gatsby-plugin-preact
  Provides drop-in support for replacing React with Preact.

  While Preact doesn’t provide full support for the React ecosystem, it is an intriguing option for Gatsby sites as it saves ~30kb of Javascript vs. using React.
- gatsby-plugin-react-helmet
  Provides drop-in support for server rendering data added with React Helmet.

  React Helmet is a component which lets you control your document head using their React component.

  With this plugin, attributes you add in their component, e.g. title, meta attributes, etc. will get added to the static HTML pages Gatsby builds.
- gatsby-plugin-sass
  Provides drop-in support for SASS/SCSS stylesheets
- gatsby-plugin-sharp
  Exposes several image processing functions built on the Sharp image processing library. This is a low-level helper plugin generally used by other Gatsby plugins. You generally shouldn’t be using this directly but might find it helpful if doing very custom image processing.

  It aims to provide excellent out-of-the box settings for processing common web image formats.

  For JPEGs it generates progressive images with a default quality level of 50.

  For PNGs it uses pngquant to compress images. By default it uses a quality setting of [50-75].
- gatsby-plugin-sitemap
  Create a sitemap for your Gatsby site.
- gatsby-plugin-styled-components
  A Gatsby plugin for styled-components with built-in server-side rendering support.
- gatsby-plugin-twitter
  Loads the Twitter JavaScript for embedding tweets. Let’s you add tweets to markdown and in other places.

  Note: when copying the embed code, just copy the blockquote section and not the script.
- gatsby-remark-autolink-headers
  Adds Github-style links to MarkdownRemark headers.
- gatsby-remark-copy-linked-files
  Copies files linked to from markdown to your public folder.
- gatsby-remark-prismjs
  Adds syntax highlighting to code blocks in markdown files using PrismJS.
- gatsby-remark-responsive-iframe
  Wraps iframes (e.g. embedded YouTube videos) in markdown files in a responsive elastic container so the iframes always span 100% of the width of their container.
- gatsby-remark-images
  Processes images in markdown so they can be used in the production build.

  In the processing, it make images responsive by:

  - Adding an elastic container to hold the size of the image while it loads to avoid layout jumps.
  - Generating multiple versions of images at different widths and sets the srcset and sizes of the img element so regardless of the width of the device, the correct image is downloaded.
  - Useing the “blur up” technique popularized by Medium and Facebook where a small 20px wide version of the image is shown as a placeholder until the actual image is downloaded.
- gatsby-remark-smartypants
  Replaces “dumb” punctuation marks with “smart” punctuation marks using the retext-smartypants plugin.
- gatsby-source-filesystem
  Plugin for creating File nodes from the file system. The various “transformer” plugins transform File nodes into various other types of data e.g. gatsby-transformer-json transforms JSON files into JSON data nodes and gatsby-transformer-remark transforms markdown files into MarkdownRemark nodes from which you can query an HTML representation of the markdown.
- gatsby-transformer-javascript-static-exports
- gatsby-transformer-json
  Parses JSON files. Currently it only handles stringified arrays but the goal is to handle in a reasonable way many types of JSON data.
- gatsby-transformer-remark
  Parses Markdown files using Remark.
- gatsby-transformer-sharp
  Creates ImageSharp nodes from image types that are supported by the Sharp image processing library and provides fields in their GraphQL types for processing your images in a variety of ways including resizing, cropping, and creating responsive images.
- gatsby-transformer-yaml
  Parses YAML files. Currently it only handles YAML arrays but the goal is to handle in a reasonable way many types of YAML data.
- gatsby-transformer-toml
  Parses TOML files.



### Official components
- gatsby-link
  A <Link> component for Gatsby.

  It’s a wrapper around React Router’s Link component that adds enhancements specific to Gatsby. All props are passed through to React Router’s Link.

  You can set the activeStyle or activeClassName prop to add styling attributes to the rendered element when it matches the current URL. If either of these props are set, then React Router’s NavLink component will be used instead of Link.

  Gatsby does per-route code splitting. This means that when navigating to a new page, the code chunks necessary for that page might not be loaded. This is bad. Any unnecessary latency should be avoided. So to avoid that, by default, Gatsby utilizes a Service Worker that precaches code chunks so navigating to new pages is quick. But as there are several popular browsers that don’t yet support Service Workers (Safari, IE, Edge), this component will also preload code chunks on these browsers.

### Community Plugins
- gatsby-plugin-antd
- gatsby-plugin-copy
- gatsby-plugin-google-fonts
- gatsby-plugin-i18n
- gatsby-plugin-i18n-tags
- gatsby-plugin-i18n-readnext
- gatsby-plugin-protoculture
- gatsby-plugin-purify-css
- gatsby-plugin-yandex-metrika
- gatsby-remark-emoji
- gatsby-source-workable

## Social Media

- Facebook
  - https://www.facebook.com/Imaginary-Radio-Stations-723683261161286/
- Twitter
  - 
- Instagram
  - 
- Mixcloud
  - 
- Soundcloud
  - 

## Mixes

mixcloud
soundcloud

## Contact

hellO@imaginaryradiostations.com

## About

Imaginary Radio Stations is a project by three Slovenian music enthusiasts, DJs and artists, founded in Berlin. Its existence is as an expression of pure intent without fitting into flavor-of-the-week hype columns, purist approaches and associated microscenes. The aim is timelessness, always inspired by concrete ambients, settings and states of mind, beckoning the wandering ear to tune in. Its concept reflects the commodification and atomization of music culture. By blurring the lines between genres and styles, producers and consumers it mirrors a fragmented culture of innumerable acteurs where everyone curates their own imaginary radio.
## DJs

- EVANO
  - https://soundcloud.com/evano
  - https://soundcloud.com/user-991612540
  - https://zars.bandcamp.com/track/vim-na
  - https://evano.bandcamp.com/releases
- PAK
  - http://www.radiostudent.si/ljudje/christian-kopa%C4%8D
  - https://soundcloud.com/teatang
  - https://www.mixcloud.com/ppaakk/
- 1983
  - https://soundcloud.com/thadiskodon
  - https://www.mixcloud.com/thadiskodon/
  - https://tproach.bandcamp.com/releases