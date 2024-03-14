---
to: packages/<%= name %>/package.json
---

{
  "name": "@hrc/<%= name %>",
  "private": false,
  "version": "0.0.0",
  "type": "module",
  "license": "MIT",
  "author": "Héctor Ochoa <hector.ochoa.dev@gmail.com>",
  "description": "<%= description %>",
  "main": "dist/main.js",
  "types": "dist/main.d.ts",
  "files": [
    "dist"
  ],
  "sideEffets": [
    "**/*.css"
  ],
  "publishConfig": {
    "access": "public"
  },
  "enginges": {
    "node": ">=13.2.0"
  },
  "prepublishOnly": "pnpm run build ",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/Hdoc1509/react-components.git",
    "directory": "packages/<%= name %>"
  },
  "bugs": {
    "url": "https://github.com/Hdoc1509/react-components/issues"
  },
  "homepage": "https://github.com/Hdoc1509/react-components/tree/master/packages/<%= name %>#readme",
  "dependencies": {
    "clsx": "^2.0.0"
  },
  "peerDependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@hrc/material-icons": "workspace:*",
    "@material-design-icons/font": "0.14.10",
    "@mono/ui": "workspace:*",
    "@vitejs/plugin-react-swc": "3.3.2",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "sass": "1.65.0",
    "typescript": "5.0.2",
    "vite": "4.4.5",
    "vite-plugin-dts": "3.5.1",
    "vite-plugin-lib-inject-css": "1.2.0"
  }
}
