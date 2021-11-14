# Random Notes

## React Directory Tree
```
.
├── README.md
├── build
│   ├── asset-manifest.json
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   ├── robots.txt
│   └── static
│       ├── css
│       │   ├── main.8c8b27cf.chunk.css
│       │   └── main.8c8b27cf.chunk.css.map
│       ├── js
│       │   ├── 2.d0eb047a.chunk.js
│       │   ├── 2.d0eb047a.chunk.js.LICENSE.txt
│       │   ├── 2.d0eb047a.chunk.js.map
│       │   ├── 3.a6e4d959.chunk.js
│       │   ├── 3.a6e4d959.chunk.js.map
│       │   ├── main.a31a76ce.chunk.js
│       │   ├── main.a31a76ce.chunk.js.map
│       │   ├── runtime-main.31ee9be5.js
│       │   └── runtime-main.31ee9be5.js.map
│       └── media
│           └── logo.6ce24c58.svg
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
└── yarn.lock
```

This is what `package.json` looks like:
```
{
  "name": "my-app",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "4.0.3",
    "web-vitals": "^1.0.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```
