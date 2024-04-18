/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./style";

function Inbody({ userId }) {
    const [formData, setFormData] = useState({
        inbodyImage: null,
        weight: 0,
        muscleMass: 0,
        fatMass: 0,
        userId: userId // 사용자의 user_id를 입력으로 받음
    });

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormData({
            ...formData,
            inbodyImage: file
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = () => {
        const isValid = !!formData.weight && !!formData.muscleMass && !!formData.fatMass;

        const isNumber = isNaN(formData.weight) && isNaN(formData.muscleMass) && isNaN(formData.fatMass);
        if (!(isValid && isNumber)) {
            alert("입력 정보를 확인하세요");
            return
        }
        const message = `입력하신 정보가 맞나요? 몸무게:${formData.weight}, 골격근량:${formData.muscleMass}, 체지방량:${formData.fatMass}`
        if (window.confirm(message)) {
            const formDataToSend = new FormData();
            formDataToSend.append("inbodyImage", formData.inbodyImage);
            formDataToSend.append("weight", formData.weight);
            formDataToSend.append("muscleMass", formData.muscleMass);
            formDataToSend.append("fatMass", formData.fatMass);
            formDataToSend.append("userId", formData.userId); // 사용자의 user_id를 추가
            fetch("/api/uploadInbody", {
                method: "POST",
                body: formDataToSend,
            })
            .then((response) => response.json())
            .then((data) => {
                console.log("Uploaded Inbody data:", data);
            })
            .catch((error) => {
                console.error("Error uploading Inbody:", error);
            });
        }
    };

    return (
        <div css={s.layout}>
            <form onSubmit={handleSubmit} css={s.inbodyForm}>
                <label htmlFor="inbodyImage">Inbody Image:</label>
                <input type="file" id="inbodyImage" name="inbodyImage" accept="image/*" onChange={handleImageChange} /><br /><br />

                <label htmlFor="weight">Weight:</label>
                <input type="number" id="weight" name="weight" value={formData.weight} onChange={handleChange} /><br /><br />

                <label htmlFor="muscleMass">Muscle Mass:</label>
                <input type="number" id="muscleMass" name="muscleMass" value={formData.muscleMass} onChange={handleChange} /><br /><br />

                <label htmlFor="fatMass">Fat Mass:</label>
                <input type="number" id="fatMass" name="fatMass" value={formData.fatMass} onChange={handleChange} /><br /><br />

                <button type="submit" css={s.customButton}>Submit</button>
            </form>
        </div>
    );
}

export default Inbody;

