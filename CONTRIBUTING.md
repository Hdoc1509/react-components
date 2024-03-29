# @hrc/monorepo Contributing Guide

## Repo Setup

To develop locally, fork the `@hrc/monorepo` repository and clone it in your local
machine:

```bash
# I recommend set `react-components` as the target directory.
git clone https://github.com/Hdoc1509/hrc.git --depth=1 react-components
```

The repo is a monorepo using [`pnpm workspaces`](https://pnpm.io/workspaces),
[`nx`](https://nx.dev) and [`changesets`](https://github.com/changesets/changesets)
for manage packages.

To develop a given package:

1. Run `pnpm i` in root folder
2. Run `pnpm nx dev --open @hrc/[package-name]` in root folder
3. Run `pnpm changeset` in root folder for track changes of a package

## Pull Request Guidelines

- This monorepo has two primary work branches: `main` and `dev`.

  - `main` is the base branch and it is used for production.
  - `dev` is the branch for development.

- Create a new branch from `main` and merge back against `main`.

- You should use a prefix for the new branch name:

  - `feat/` for new features
  - `fix/` for bug fixes
  - `docs/` for documentation only changes
  - `refactor/` for code refactoring
  - `perf/` for performance improvements
  - `chore/` for changes that don't fit in any other category

- If adding a new feature:

  - Provide a convincing reason for the new feature, you should open a
    suggestion issue first and have it approved before working on it.

- If fixing a bug:

  - Add `(fix #xxxx[,#xxxx])` (#xxxx is the issue id) in your PR title.
  - Provide a detailed explanation of the bug.

- It's OK to have multiple small commits as you work on the PR - Github can
  automatically squash them before merging.

- Commit messages must follow the [commit message convention](./.github/commit-convention.md).
