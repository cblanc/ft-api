[![CircleCI](https://circleci.com/gh/cblanc/ft-api.svg?style=svg)](https://circleci.com/gh/cblanc/ft-api) [![Coverage Status](https://coveralls.io/repos/github/cblanc/ft-api/badge.svg?branch=master)](https://coveralls.io/github/cblanc/ft-api?branch=master) [![Greenkeeper badge](https://badges.greenkeeper.io/cblanc/ft-api.svg)](https://greenkeeper.io/)

# FT API Client

## Usage

### Instantiation

```javascript
const { Client } = require("@cablanchard/ft-api");

const key = "your ft api key";

const client = new Client({
	key: key
});
```

### Headlines API

```javascript
client.search({ query: "Trump" });
```

```javascript
POST Search 2: queryString={Trump AND Clinton}, curations={Articles}
This will search for content that mentions Trump in any of the searchable fields, but where the headline (title) contains Clinton

POST Search 3: queryString={British Telecom}, facets={Organisations}
Find what tag is used for British Telecom. Search for relevant content and ask the search to show details found in the results

POST Search 4: queryString={Apple AND lastPublishDateTime}, curations={Blogs}
Search for blogs that mention Apple and have been published this year

POST Search 5: queryString={Byline AND lastPublishDateTime}, curations={Artcles}
Search for byline Martin Wolf published since 2017

POST Search 6: queryString={Banks}, sortOrder={Desc}
Sort by date (most recent first)
```

## API Reference

- [API Reference](https://developer.ft.com/portal/docs-api-reference)
- [Notifications API](https://developer.ft.com/portal/docs-api-v2-reference-notifications)
- [Search API](https://developer.ft.com/portal/docs-api-v1-reference-search-search-api-tutorial)
- [Discovery Methods](https://developer.ft.com/portal/docs-api-v1-reference-search-discovery-methods)
- [Facets Discovery](https://developer.ft.com/portal/docs-api-v1-reference-search-discovery-methods-facets)

## Licence

MIT
