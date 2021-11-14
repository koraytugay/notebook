# webpack-dev-server Notes
`devServer.contentBase` - Assuming you don't generate `index.html` dynamically and prefer to maintain it yourself in a specific directory, you need to point WDS to it. 
`contentBase` accepts either a path (e.g., "build") or an array of paths (e.g., ["build", "images"]). The value defaults to the project root.

## References
- [Survive JS](https://survivejs.com/webpack/developing/development-server/)
