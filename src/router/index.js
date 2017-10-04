import Vue from 'vue';
import Router from 'vue-router';
// import Hello from '@/components/Hello';
import Statistics from '../components/Statistics';
import Routes from '../components/Routes/';
import Entries from '../components/Entries/';
import AddEntry from '../components/AddEntry';
import EditEntry from '../components/EditEntry';
import NotFound from '../components/NotFound';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Statistics',
      component: Statistics,
    },
    {
      path: '/routes',
      name: 'Routes',
      component: Routes,
    },
    {
      path: '/entries',
      name: 'Entries',
      component: Entries,
    },
    {
      path: '/add-entry',
      name: 'AddEntry',
      component: AddEntry,
    },
    {
      path: '/entry/:id',
      name: 'EditEntry',
      component: EditEntry,
      props: true,
    },
    { path: '*', component: Vue.component('NotFound', NotFound) },
  ],
});
