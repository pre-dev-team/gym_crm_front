/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { storage } from "../../../apis/api/firebase/firebaseConfig";
import { v4 as uuid } from "uuid";
import { updateTrainerImgRequest } from "../../../apis/api/trainer";
import { useMutation, useQueryClient } from "react-query";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

function TrainerProfile({ trainerProfile, setTrainerProfile, accountId, fileRef }) {
    const queryClient = useQueryClient();
    const { name, phone, email, username, trainerProfileImgUrl } = trainerProfile;

    const trainerImgMutation = useMutation({
        mutationKey: "trainerImgMutation",
        mutationFn: updateTrainerImgRequest,
        retry: 0,
        onSuccess: (response) => {
            queryClient.invalidateQueries(["trainerInfoQuery"]);
        },
    });

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);

        if (files.length === 0) {
            e.target.value = "";
            return;
        }

        if (!window.confirm("파일을 업로드 하시겠습니까?")) {
            e.target.value = "";
            return;
        }

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

    return (
        <div>
            <div css={s.profileContainer}>
                <div css={s.profileBox}>
                    <div css={s.profileImg} onClick={() => fileRef.current.click()}>
                        <input style={{ display: "none" }} type="file" ref={fileRef} onChange={handleFileChange} />
                        <img src={trainerProfileImgUrl} alt="Trainer Profile" />
                    </div>
                </div>
                <div css={s.profileInfo}>
                    <div>{name}</div>
                    <div>{phone}</div>
                    <div>{email}</div>
                </div>
            </div>
        </div>
    );
}

export default TrainerProfile;
