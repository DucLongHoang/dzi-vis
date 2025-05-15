# DZI Viewer

## Prerequisites

- **nodejs** version 20.11.0
- **pnpm** version 9.15.4

## Installation

### Linux

```bash
> curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
> source ~/.bashrc
> nvm -v # Check that nvm is installed
> nvm install 20.11.0
> node -v # Check that node is installed
> npm install -g pnpm@9.15.4
> pnpm -v # Check that pnpm is installed
```

### Windows

install nvm-windows from [here](https://github.com/coreybutler/nvm-windows)

```bash
# continue like on linux
> nvm install 20.11.0
> node -v # Check that node is installed
> npm install -g pnpm@9.15.4
> pnpm -v # Check that pnpm is installed
```

## How to run

open terminal in project root

1. `pnpm i` - install dependencies
2. `pnpm dev` - run locally
3. in browser open [http://localhost:3000](http://localhost:3000)
