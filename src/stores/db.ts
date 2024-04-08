import type { Urls } from '@/types'
import { collections as db } from '@/firebase.config'
import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'
import { collection, getDocs, query } from 'firebase/firestore/lite'
import { where } from 'firebase/firestore'
import { getAuth, type Auth } from 'firebase/auth'
export const useDbStore = defineStore('db', () => {
  const documents: Ref<Urls[]> = ref([])
  const auth: Ref<Auth | null> = ref(getAuth())
  const user = auth.value?.currentUser
  const loading: Ref<boolean> = ref(true)

  const getUrls = async () => {
    try {
      const q = query(collection(db, 'urls'), where('users', '==', user?.uid))
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        documents.value?.push(doc.data() as Urls)
        console.log(documents.value)
      })
    } catch (e: any) {
      console.log(`Error ${e}`)
    } finally {
      loading.value = false
    }
  }

  return {
    documents,
    getUrls,
    loading
  }
})
