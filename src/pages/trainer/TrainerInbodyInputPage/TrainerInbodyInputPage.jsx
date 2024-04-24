/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./style";
import { useSearchParams } from "react-router-dom";
import { useMutation } from "react-query";
import { addUserInbodyInfoRequest } from "../../../apis/api/inbody";

function TrainerInbodyInputPage() {
    const [searchParams] = useSearchParams();
    const userId = searchParams.get("userId");

    const [inbodyInfo, setInbodyInfo] = useState({
        inbodyImage: null,
        weight: 0,
        muscleMass: 0,
        fatMass: 0,
    });

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setInbodyInfo({
            ...inbodyInfo,
            inbodyImage: file,
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInbodyInfo({
            ...inbodyInfo,
            [name]: value,
        });
    };

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
            // addUserInbodyInfoMutation.mutate({
            //     userId: userId,
            //     inbodyImage: inbodyInfo.inbodyImage,
            //     weight: inbodyInfo.weight,
            //     muscleMass: inbodyInfo.muscleMass,
            //     fatMass: inbodyInfo.fatMass,
            // });
        }
    };

    return (
        <div css={s.layout}>
            <div css={s.inbodyForm}>
                <label htmlFor="inbodyImage">Inbody Image:</label>
                <input type="file" id="inbodyImage" name="inbodyImage" accept="image/*" onChange={handleImageChange} />
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
