# apollo-ts

## Generate
>schema.grapql from server & types defenition from schema and queries

check apollo.config.js

```
apollo service:download --endpoint=http://localhost:4000
apollo codegen:generate --localSchemaFile=node_modules/.temp/graphql/schema.graphql --target=typescript --includes='src/graphql/*.gql' --tagName=gql --addTypename --globalTypesFile=src/types/graphql-global-types.ts types<Paste>
```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
