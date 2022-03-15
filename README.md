# pnpm storybook-builder-vite issue

By default pnpm uses a tree structure for node modules instead of hoisting all
depenencies into a flat folder structure. This causes `storybook-builder-vite`
to fail to launch with the following error:

```
info @storybook/react v6.4.19
info
info => Loading presets
ERR! Error: [vite-plugin-mdx] "@mdx-js/react" must be installed
```

One workaround is to enable classic node hoisting via a setting in `.npmrc`:

```
node-linker=hoisted
```

While this works, when used in a `pnpm` monorepo it can cause other issues.

Any ideas on a solution are welcome.

https://github.com/eirslett/storybook-builder-vite/issues/55

https://github.com/eirslett/storybook-builder-vite/issues/237

https://github.com/pnpm/pnpm/issues/4284
