/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./style"; // CSS style imports
import WorkoutSelect from "./WorkoutSelect/WorkoutSelect";
import { FaArrowRight } from "react-icons/fa";
import { useMutation } from "react-query";
import { userRoutineRequest } from "../../apis/api/workout";

function MakeRoutine() {
    const [routineInfoList, setRoutineInfoList] = useState([]);
    const [clickedRoutine, setClickedRoutine] = useState(null);
    const [clickedIndex, setClickedIndex] = useState(null);

    const handleRoutineclick = (index) => {
        setClickedIndex(()=>index);
    }

    const handleEditClick = (routine) => {
        setClickedRoutine(()=>routine);
    }

    const handleDeleteClick = () => {
        if (clickedIndex !== null) {
            // 클릭된 인덱스의 루틴 정보를 제외한 새로운 배열을 생성하여 업데이트
            const updatedRoutineList = routineInfoList.filter((index) => index !== clickedIndex);
            setRoutineInfoList(updatedRoutineList);
            setClickedIndex(null); // 삭제 후 클릭된 인덱스 초기화
        }
    }

    const userRoutineMutation = useMutation({
        mutationKey: "userRoutineMutation",
        mutationFn: userRoutineRequest,
        onSuccess: (response) => {
            alert("전송 완료");
            window.location.replace("/");
        }

        
    })

    const handleSubmitClick = () => {
        console.log(routineInfoList);
        userRoutineMutation.mutate({

            
        });
    }
    
    return (
        <div css={s.background}>
            <div css={s.layout}>
                <div css={s.boxLayout}>
                    
                    <div css={s.inLayout}>
                        <div css={s.routineSelectBox}>
                         <WorkoutSelect routineInfoList={routineInfoList} setRoutineInfoList={setRoutineInfoList} clickedRoutine={clickedRoutine} clickedIndex={clickedIndex} setClickedIndex={setClickedIndex} />
                            
                        </div>
                    
                    <div css={s.iconBox}>
                        <FaArrowRight css={s.arrowRight} />
                    </div>
                    <div css={s.selectBox}>
                            {routineInfoList.map((routine, index) => (
                                        <div css={s.card} key={index} onClick={() => handleRoutineclick(index)} >
                                            <div>순서: {index + 1}</div>
                                            <div>운동부위: {routine.category?.label}</div>
                                            <div>운동: {routine.workout?.label}</div>
                                            <div>무게: {routine.weights}</div>
                                            <div>세트 x 개수: {routine.sets} X {routine.counts}</div>
                                            <div>총개수: {routine.sets * routine.counts}</div>
                                            {
                                                index === clickedIndex ?
                                            <div>
                                                <button onClick={() => handleEditClick(routine)}>수정</button>
                                                <button onClick={handleDeleteClick}>삭제</button>
                                            </div>    : <></>
                                            }
                                            
                                        </div>
                                    ))}
                    </div>
                    </div>
                </div>
                <div css={s.dragBox}>
                   
                </div>
                <div css={s.submit}>
                    <button onClick={handleSubmitClick}>전송</button>
                </div>
                <div>
                    <button onClick={null}>닫기</button>
                </div>
            </div>
        </div>
    );
}

export default MakeRoutine;