import type firebase from 'firebase/compat/app'
import type { Firestore } from 'firebase/firestore'
import { getFirestore } from 'firebase/firestore/lite'

const collections:Firestore = getFirestore()

export { collections }
