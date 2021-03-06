[![CircleCI](https://circleci.com/gh/cblanc/ft-api.svg?style=svg)](https://circleci.com/gh/cblanc/ft-api) [![Coverage Status](https://coveralls.io/repos/github/cblanc/ft-api/badge.svg?branch=master)](https://coveralls.io/github/cblanc/ft-api?branch=master) [![Greenkeeper badge](https://badges.greenkeeper.io/cblanc/ft-api.svg)](https://greenkeeper.io/)

# FT API Client

## Usage

### Instantiation

This client requires an [API Key](https://developer.ft.com/portal/docs-start-obtain-an-api-key) which can be generated using a [FT Developer account](https://developer.ft.com/portal/docs-start-create-an-ft-api-developer-account)

```javascript
const { Client } = require("@cablanchard/ft-api");

const key = "your ft api key";

const client = new Client({
	key: key
});
```

### Content Search API

Search for items of content that are available on www.ft.com.

```javascript
const response = client.search({ query: "banks" });

console.log(response.data); // => Print search response
```

### Notifications API

```javascript
???
```

### Discovery APIs

```javascript
// An API endpoint to discover which field names can be used in search API queries
const searchableFields = await client.searchable();

// An API endpoint to discover a list of sortable fields that can be specified in search API queries.
const sortableFields = await client.sortable();

// An API endpoint to discover a list of facets that can be specified in search API queries
const facts = await client.facets();
```


```
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
