import { storage } from "../../apis/api/firebase/firebaseConfig";

const firebaseImgUplodad = (files, url) => {
    const storageRef = ref(storage, `gym/trainer/profile/${uuid()}_${files[0].name}`);
    const uploadTask = uploadBytesResumable(storageRef, files[0]);

    uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {},
        () => {
            alert("업로드를 완료하셨습니다.");
            getDownloadURL(storageRef).then((url) => {
                trainerImgMutation.mutate({
                    trainerProfileImgUrl: url,
                    accountId: accountId,
                });
            });
        }
    );
};

export default firebaseImgUplodad;
