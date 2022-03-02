import { db } from "./index";
import {
  collection,
  setDoc,
  doc,
  getDoc,
  arrayUnion,
  arrayRemove,
  getDocs,
  deleteDoc,
  query,
  collectionGroup,
} from "firebase/firestore";

import { pearlEvents } from "../temp";
import { atmosEvents } from "../temp2";

export async function getData() {
  try {
    const q = query(collection(db, "atmos"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function uploadData() {
  try {
    console.log(atmosEvents);
    atmosEvents.map((item) => {
      const dbRef = doc(collection(db, "atmos"));
      console.log(item);
      setDoc(dbRef, item);
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
