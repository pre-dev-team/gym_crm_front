/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./style";
import { useSearchParams } from "react-router-dom";
import { useMutation } from "react-query";
import { addUserInbodyInfoRequest } from "../../../apis/api/inbody";
import { v4 as uuid } from "uuid";
import { storage } from "../../../apis/api/firebase/firebaseConfig";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

function TrainerInbodyInputPage() {
    const [searchParams] = useSearchParams();
    const userId = parseInt(searchParams.get("dlsqkel")) - 11;

    const [inbodyInfo, setInbodyInfo] = useState({
        inbodyImage: null,
        weight: 0,
        muscleMass: 0,
        fatMass: 0,
    });

    const addUserInbodyInfoMutation = useMutation({
        mutationKey: "addUserInbodyInfoMutation",
        mutationFn: addUserInbodyInfoRequest,
        retry: 0,
        onSuccess: (response) => {
            alert("입력성공");
            window.close();
        },
        onError: (error) => {},
    });

    const handleImageChange = (e) => {
        const { files } = e.target;

        if (files.length === 0) {
            e.target.value = "";
            return;
        }

        if (!window.confirm("파일을 업로드 하시겠습니까?")) {
            e.target.value = "";
            return;
        }

        const storageRef = ref(storage, `gym/user/inbodyimg/${uuid()}_${files[0].name}`);
        const uploadTask = uploadBytesResumable(storageRef, files[0]);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                alert("업로드 중...");
            },
            (error) => {
                alert("업로드 에러");
            },
            () => {
                alert("업로드를 완료하셨습니다.");
                getDownloadURL(storageRef).then((url) => {
                    setInbodyInfo(() => {
                        return {
                            ...inbodyInfo,
                            inbodyImage: url,
                        };
                    });
                });
            }
        );
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInbodyInfo({
            ...inbodyInfo,
            [name]: value,
        });
    };

    const handleSubmitClick = () => {
        const isValid = !!inbodyInfo.weight && !!inbodyInfo.muscleMass && !!inbodyInfo.fatMass;

        const isNumber = !isNaN(inbodyInfo.weight) && !isNaN(inbodyInfo.muscleMass) && !isNaN(inbodyInfo.fatMass);
        if (!(isValid && isNumber)) {
            alert("입력 정보를 확인하세요");
            return;
        }
        const message = `입력하신 정보가 맞나요? 
        몸무게:${inbodyInfo.weight}, 
        골격근량:${inbodyInfo.muscleMass}, 
        체지방량:${inbodyInfo.fatMass}`;
        if (window.confirm(message)) {
            console.log({
                userId: userId,
                inbodyImage: inbodyInfo.inbodyImage,
                weight: inbodyInfo.weight,
                muscleMass: inbodyInfo.muscleMass,
                fatMass: inbodyInfo.fatMass,
            });
            addUserInbodyInfoMutation.mutate({
                userId: userId,
                inbodyUrl: inbodyInfo.inbodyImage,
                weight: inbodyInfo.weight,
                muscleMass: inbodyInfo.muscleMass,
                fatMass: inbodyInfo.fatMass,
            });
        }
    };

    return (
        <div css={s.layout}>
            <div css={s.inbodyForm}>
                <label htmlFor="inbodyImage">인바디 스캔등록</label>
                <input type="file" id="inbodyImage" name="inbodyImage" multiple={false} onChange={handleImageChange} />
                <label htmlFor="weight" id="weight">
                    몸무게(kg)
                </label>
                <input
                    type="number"
                    id="weight"
                    name="weight"
                    value={inbodyInfo.weight}
                    min={0}
                    onChange={handleInputChange}
                />
                <label htmlFor="muscleMass">골격근량(kg)</label>
                <input
                    type="number"
                    id="muscleMass"
                    name="muscleMass"
                    value={inbodyInfo.muscleMass}
                    min={0}
                    onChange={handleInputChange}
                />
                <label htmlFor="fatMass">체지방량(kg)</label>
                <input
                    type="number"
                    id="fatMass"
                    name="fatMass"
                    value={inbodyInfo.fatMass}
                    min={0}
                    onChange={handleInputChange}
                />
                <button type="submit" css={s.customButton} onClick={handleSubmitClick}>
                    Submit
                </button>
            </div>
        </div>
    );
}

export default TrainerInbodyInputPage;
