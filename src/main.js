/* Este arquivo é o "ponto de entrada" do vueJs */
/* Pegando a instância do vue */
/* Desestruturação */
/* Assim, compilação em tempo de execução não é suportado pelo vueJs */
//import { createApp } from 'vue'
/* Assim, é suportado */
import { createApp } from 'vue/dist/vue.esm-bundler.js';
import './style.css'
import App from './App.vue'

/* Como se fosse o componente principal
   onde vão ser montadas todas as peças do
   layout: header, footer, sidebar, content */
const app = createApp(App);

/* Estes componentes globais são renderizados no "App.vue" */
/* Componente "global" */
app.component('header-app', {
    /* template: '<h2>Header</h2>' */
    template: `<footer-app></footer-app>`
})

/* Componente "global" */
app.component('footer-app', {
    template: '<h2>Footer</h2>'
   
})

/* Montando toda a aplicação */
/* Na "div" com id "app", do index.html */
app.mount("#app");


