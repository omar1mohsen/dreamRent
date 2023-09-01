import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
  } from "firebase/storage";
  import { auth } from "@/firebase";
import { v4 as uuidv4 } from "uuid";

// store image in firebase storage
 const storeImage = async (image : any) => {
       return new Promise((resolve, reject) => {
          const storage = getStorage();
          const fileName = `${auth.currentUser?.uid}-${image.name}-${uuidv4()}`;
          const storageRef = ref(storage, "images/" + fileName);
          const uploadTask = uploadBytesResumable(storageRef, image);
  
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log("Upload is " + progress + "% done");
              switch (snapshot.state) {
                case "paused":
                  console.log("Upload is paused");
                  break;
                case "running":
                  console.log("Upload is running");
                  break;
              }
            },
            (error) => {
              reject(error);
            },
            () => {
               getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                resolve(downloadURL);
              });
            }
          );
        });
      };   
export default storeImage