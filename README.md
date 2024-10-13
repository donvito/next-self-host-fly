This is a [Next.js](https://nextjs.org) example project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) and deployed to [Fly.io](https://fly.io).

## Deploy to Fly.io

### 1. Install the Fly CLI  

```
brew install flyctl
```

### 2. Launch the app to create a deployment configuration fly.toml

```
fly launch
```

### 3. For succeeding deployments, use the following command

```
fly deploy
```

## Source Code

To test the API functionality, I added an API here

```
/src/app/api/blogs/route.ts
```

Then I added a page to call the API

```
/src/app/blog/page.tsx
```

## Author

[donvitocodes.com](https://donvitocodes.com)

