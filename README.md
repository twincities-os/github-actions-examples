# GitHub Actions Examples

An example of building out a GitHub Action.

## Usage

Reference this action in your workflow:

```yaml
- uses: twincities-os/github-actions-examples@main
  with:
    MODEL_VERSION: 'v1.0'
```

## Local Development

### Prerequisites for Testing Locally

- [Docker](https://docs.docker.com/get-docker/)
- [nektos/act](https://nektosact.com/installation/index.html) for local testing

### Testing Locally

```bash
# Run from repository root
act
```

### Testing in External Repository

Test your changes by referencing the action from another repository, such as [test-github-actions](https://github.com/branberry/test-github-actions/blob/main/.github/workflows/ci.yml#L7-L9).
