import type { Urls } from '@/types'
import { collections as db } from '@/firebase.config'
import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'
import { addDoc, collection, deleteDoc, doc, getDocs, query } from 'firebase/firestore/lite'
import { where } from 'firebase/firestore'
import { getAuth, type Auth } from 'firebase/auth'
import { nanoid } from 'nanoid'
export const useDbStore = defineStore('db', () => {
  const documents: Ref<Urls[]> = ref([])
  const document: Ref<Urls> = ref({})
  const auth: Ref<Auth> = ref(getAuth())
  const user = auth.value?.currentUser
  const loading: Ref<boolean> = ref(true)

  const getUrls = async () => {
    try {
      const q = query(collection(db, 'urls'), where('users', '==', user?.uid))
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        documents.value?.push({
          id: {
            name: doc.data().name,
            short: doc.data().short,
            user: doc.data().user
          }
        })
        console.log(documents.value)
      })
    } catch (e: any) {
      console.log(`Error ${e}`)
    } finally {
      loading.value = false
    }
  }

  const addUrl = async (name: string) => {
    try {
      document.value = {
        id: {
          name,
          short: nanoid(7),
          user: user?.uid
        }
      }
      const docRef = await addDoc(collection(db, 'urls'), document)
      //console.log('Document written with ID: ', docRef)
      documents.value.push(document.value)
    } catch (e: any) {
      console.log(`Error ${e}`)
    } finally {
      loading.value = false
    }
  }

  const deleteUrl = async (id: string) => {
    try {
      const docRef = doc(db, 'urls', id)
      await deleteDoc(docRef)
      documents.value = documents.value.filter((doc) => doc.id !== id)
    } catch (e: any) {
      console.log(`Error ${e}`)
    }
  }
  return {
    documents,
    getUrls,
    loading,
    addUrl,
    deleteUrl
  }
})
