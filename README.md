#

Bug reproduction of issue with `esbuild-css-modules-plugin` and `karma-esbuild`

1. Run `yarn install`
2. Run `yarn test`.  Note the error.

> 15 02 2023 19:37:31.358:ERROR [karma-server]: UnhandledRejection: Error: ENOENT: no such file or directory, open '/903da71a870a8ac87b14acb1603e959c-bundle.css'
15 02 2023 19:37:31.358:ERROR [karma-server]: [Error: ENOENT: no such file or directory, open '/903da71a870a8ac87b14acb1603e959c-bundle.css'] {
  errno: -2,
  code: 'ENOENT',
  syscall: 'open',
  path: '/903da71a870a8ac87b14acb1603e959c-bundle.css'
}

3. Modify `esbuild.config.js` to remove the `inject` property from the plugin. 
4. Run `yarn test`.  Note that the error does not occur.