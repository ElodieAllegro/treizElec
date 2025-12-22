import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        calculateur: 'calculateur.html',
        realisations: 'realisations.html',
        contact: 'contact.html',
        login: 'login.html',
        adminLogin: 'admin-login.html',
        espaceClient: 'espace-client.html',
        admin: 'admin.html',
        mentionsLegales: 'mentions-legales.html',
        cgv: 'cgv.html',
        infosUtiles: 'infos-utiles.html'
      }
    }
  }
});