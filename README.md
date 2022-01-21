# pr-status-action
Github Action to set Github PR with a Context and a Status

## Inputs

### repository
Description: 'Git Repository name'
Required: true

### pr-number
Description: 'PR number in the Git Repository'
Required: true

### context
Description: Name to use as a Context in PR
Required: true

### state
Description: 'State to set in the PR context'
Required: true

### description
Description: A short description to define the status of the Context
Required: true

### target-url
Description: The target URL to associate with the Context
Required: false

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
