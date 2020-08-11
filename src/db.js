import firebase from 'firebase/app'
import 'firebase/firestore'
import config from './config/firebase' 

firebase.initializeApp(config)

export const db = firebase.firestore()
export const Timestamp = firebase.firestore.Timestamp

db.settings({ cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED })
db.enablePersistence()
