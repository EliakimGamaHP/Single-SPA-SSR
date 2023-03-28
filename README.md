# Single-SPA-SSR
 
This example shows server-rendered microfrontends using single-spa, single-spa-layout, @node-loader/import-maps, and @node-loader/http.

You can read more about how this works at https://single-spa.js.org/docs/ssr-overview.

The current example updates the Pokémon APIs (https://github.com/isomorphic-microfrontends/root-config) by adding two more microfrontends to its ecosystem. (App2 and Footer)

prerequisites

This project requires a version of NodeJS that supports the --experimental-loader flag. I don't know exactly when it was added, but Node 14 definitely has support for it.

Also, this project can only work correctly when the yarn.lock file is respected when installing dependencies. To do this you can install yarn or use npm@>=7

Another point to note is the version of Node you are using, as this project uses Webpack 4, so it will only be compatible with versions lower than Node 16. If you are using a higher version of Node, you can install NVM ( https://github.com/coreybutler/nvm-windows/releases) to downgrade and control the versions to be used, here (https://www.treinaweb.com.br/blog/instalando-e-gerenciando- various-versions-of-node-js-with-nvm) is a tutorial showing how to do this.

1) Install yarn on all the Microfrontends you want to run (yarn install)
2) Run the desired MFEs with the command (yarn start)
3) Run the root application with the command (Yarn develop)
4) Note the HTTP port number that is shown in the webpack output in the terminal of each microfrontend run. By default root will be 9000 and other MFEs will start from 8000 onwards.

Now open the root configuration in a browser at http://localhost:9000 . Run the following in the browser console:

'''
localStorage.setItem('devtools', true);
window.location.reload();
'''

You should now see the Import Map Override UI, which is a yellowish rectangle at the bottom right of the webpage. Click the rectangle, then click @isomorphic-mf/pokemons. Set the URL to the port number ( 8000) noted earlier. Now do the same for @isomorphic-mf/pokemons/. If you want to see other MFEs, just replace the /pokemons and /pokemons/ route with the desired MFE address.

Reload the page.
