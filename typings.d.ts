// import { serverTimestamp } from "firebase/firestore";

interface Message {
  text: string;
  createdAt: admin.firestore.serverTimestamp;
  user: {
    _id: string;
    name: string;
    avatar: string;
  };
}
