## Issues

### Auth

#### GraphQL authorization

Since token is set a render after login, token is not always sent with the GraphQL request.
Edit: Not really an issue because the request is sent after token is obtained

#### Login

Login errors are not caught

## Things required

- Firebase config object

## Important things to be done

- UI lol
- Configuring Apollo cache
- using graphql codegen for better type safety
- configuring tests (Jest)
- maybe replace Parcel with Webpack (or possibly Snowpack)