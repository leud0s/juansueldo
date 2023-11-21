import { Injectable } from '@angular/core';
import { doc, addDoc, collection, collectionData, Firestore, getDoc, getDocs, updateDoc, setDoc } from "@angular/fire/firestore";
import { Email } from '../class/email';
@Injectable({
  providedIn: 'root'
})
export class EmailsService {

  constructor(private firestore: Firestore) { }

  saveEmail(email :Email){
    let col = collection(this.firestore, 'emails');
    addDoc(col, Object.assign({}, email));
  }
}
