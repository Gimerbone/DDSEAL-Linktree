import { doc, getDoc, Timestamp } from "firebase/firestore";
import { db } from "@/store/firebase";

interface SettingsData {
  event_time: Timestamp;
}

export async function getTimeInSeconds(): Promise<number> {
    const docRef = doc(db, "time", "5NHgQvskKx0y4PiubW35");
    const snap = await getDoc(docRef);

    if (!snap.exists()) {
        throw new Error("Document not found");
    }

    const data = snap.data() as SettingsData;
    const event_date = data.event_time.toDate();

    const totalSeconds = Math.floor((event_date.getTime() - Date.now()) / 1000);
    
    return totalSeconds > 0 ? totalSeconds : 0;
}