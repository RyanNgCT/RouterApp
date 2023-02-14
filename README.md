# router-app

Project to learn Vue Routing based on [this Youtube Tutorial Video](https://www.youtube.com/watch?v=PBqQO-keR1s)

### Steps to add routing to application
1. Define the Routing Rules (in `/router/index.js`)
2. Tell Vue about our Routing Rules
3. Define where to render the page components

### Using Vue Router Components
- Vue reloads the entire app (inclusing the console etc.) whenever Anchor Tags (`<a href="..."></a>`) are used.
- Adding styling to RouterLink elements (add the `active-class` attribute):
    ```vue
    <RouterLink active-class="active" to="/about">About Page</RouterLink>
    ```

- `UseRoute` composable: used to get information about our current path
- `UseRouter` composable: change, go back or reset path (add functionality to path)

### Flexbox properties
- using `display: flex;` will only apply to the immediate children and not subsequent layers (immediate children).

### Bug List
1. Open an issue or PR.
2. To do:
- [x] URL not syncing with textbox for `maxPrice` (done).
- [ ] Style webpage (?)

### Project setup
```bash
npm i
```

### Compile
```bash
# dev
npm run serve

# prod
npm run build
```