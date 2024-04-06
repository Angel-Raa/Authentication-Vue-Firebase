import './assets/main.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAV5qACzV5oKq_983OmtGTNDK1tojYwt6Q',
  authDomain: 'auth-vue-firebase-6c579.firebaseapp.com',
  projectId: 'auth-vue-firebase-6c579',
  storageBucket: 'auth-vue-firebase-6c579.appspot.com',
  messagingSenderId: '629082941675',
  appId: '1:629082941675:web:04d09108aaad53133236ae'
}

// Initialize Firebase
initializeApp(firebaseConfig)

app.use(router)
app.mount('#app')
