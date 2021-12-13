# IHP React Starter

## Usage

On first start install the npm dependencies:

```bash
npm install
```

After this you can start the web server and esbuild watcher:

```bash
export BACKEND_URL="https://REPLACE ME.di1337.com"
npm run start
```

## Type Checking

The application server will not display type errors by default. For that you need to start a second process:

```bash
npm run typecheck
```

Before the first type check, open the Project Settings and install the provided TypeScript type declaration for your project.

## Bundling for Production

```bash
export BACKEND_URL="https://REPLACE ME.di1337.com"
npm run build
```