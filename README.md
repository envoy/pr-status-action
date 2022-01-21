# PR Status Github Action
Github Action to set Github PR with a Context and a Status

## Inputs

Name | Description | Required
--- | --- | ---
`repository` | Git Repository name | `true`
`pr-number` | PR number in the Git Repository | `true`
`context` | Name to use as a Context in PR | `true`
`state` | State to set in the PR context | `true`
`description` | A short description to define the status of the Context | `true`
`target-url` | The target URL to associate with the Context | `false`

## Example Usage

```
jobs:
  set-pr-status:
    runs-on: ubuntu-latest
    steps:
    - name: Set PR Context Status to Pending
        uses: envoy/pr-status-action@v1.0.0
        with:
          # Repository name (Mandatory)
          repository: envoy/awesome-project

          # PR Number  (Mandatory)
          pr-number: 101

          # Name the context to use in the PR  (Mandatory)
          context: cool-context

          # State to apply (Mandatory)
          # Any of the (error | failure | pending | success) states
          state: pending

          # A short description of the status (Mandatory)
          description: This is so awesome to use a context in a PR

          # The target URL to associate with the Context Status (Optional)
          # This Github UI will link the URL (source of status) to the Context.
          target_url: https://nice-url.envoy.com

        env:
          # Default Github Token
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

> `GITHUB_TOKEN` required to make necessary API calls to Github to set the Context and the relevant Status in the PR

## Local Development

Refer [this](https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action) document to learn more on how to create custom Github Actions (JS) 

> Checking in your node_modules directory can cause problems. As an alternative, you can use a tool called `@vercel/ncc` to compile your code and modules into one file used for distribution.

* Install `vercel/ncc` by running this command in your terminal. 
```
npm i -g @vercel/ncc
```
* Compile your `index.js` file. `ncc build index.js --license licenses.txt`
* You'll see a new `dist/index.js` file with your code and the compiled modules. You will also see an accompanying `dist/licenses.txt` file containing all the licenses of the `node_modules` you are using.
* Change the main keyword in your `action.yml` file to use the new `dist/index.js` file. `main: 'dist/index.js'`
* If you already checked in your `node_modules` directory, remove it. 
```
rm -rf node_modules/*
```
