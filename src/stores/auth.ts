import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'
import {
  getAuth,
  type Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  type UserCredential
} from 'firebase/auth'
export const useAuthStore = defineStore('auth', () => {
  const auth: Ref<Auth | null> = ref(getAuth())
  const user: Ref<UserCredential | null> = ref(null)
  const error: Ref<boolean | null> = ref(false)

  const register = async (email: string, password: string): Promise<void> => {
    await createUserWithEmailAndPassword(auth.value!, email, password)
      .then((res) => (user.value = res))
      .catch((e: any) => {
        console.log(e)
        error.value = true
      })
  }

  const login = async (email: string, password: string): Promise<void> => {
    await signInWithEmailAndPassword(auth.value!, email, password)
      .then((res) => (user.value = res))
      .catch((e: any) => {
        console.log(e)
        error.value = true
      })
  }

  const logout = async (): Promise<void> => {
    await signOut(auth.value!)
      .then((res) => {
        console.log(res)
        user.value = null
      })
      .catch((e: any) => {
        console.log(e)
      })
  }

  return {
    register,
    login,
    logout,
    error,
    user
  }
})
