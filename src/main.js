// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

  let app;
  var config = {
    apiKey: "AIzaSyC6I0nNAYHroSNoiTdTcIpNP3Ujf-zchVo",
    authDomain: "vue-firebase-e3e77.firebaseapp.com",
    databaseURL: "https://vue-firebase-e3e77.firebaseio.com",
    projectId: "vue-firebase-e3e77",
    storageBucket: "",
    messagingSenderId: "44019768364"
  };

  
  firebase.initializeApp(config)
  firebase.auth().onAuthStateChanged(function(user) {
    if (!app) {
      /* eslint-disable no-new */
      app = new Vue({
        el: '#app',
        template: '<App/>',
        components: { App },
        router
      })
    }
  });