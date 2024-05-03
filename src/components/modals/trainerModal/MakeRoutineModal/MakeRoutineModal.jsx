/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useRef, useState } from "react";
import WorkoutSelect from "../../../trainer/WorkoutSelect/WorkoutSelect";
import { useMutation } from "react-query";
import { makeRoutineRequest } from "../../../../apis/api/workout";
import { workout } from "../../../../assets/workoutImg/workoutImg";

function MakeRoutineModal({ reservationId }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [routineList, setRoutineList] = useState([]);
    const dragItem = useRef();
    const dragOverItem = useRef();

    const dargStart = (position) => {
        dragItem.current = position;
    };

    const dragEnter = (position) => {
        dragOverItem.current = position;
    };

    const drop = () => {
        const copyListItems = [...routineList];
        const dragItemContent = copyListItems[dragItem.current];
        copyListItems.splice(dragItem.current, 1);
        copyListItems.splice(dragOverItem.current, 0, dragItemContent);
        dragItem.current = null;
        dragOverItem.current = null;
        setRoutineList(() => copyListItems);
        console.log(routineList);
    };

    const userRoutineMutation = useMutation({
        mutationKey: "userRoutineMutation",
        mutationFn: makeRoutineRequest,
        retry: 0,
        onSuccess: (response) => {
            alert("등록 완료");
            handleCloseClick();
        },
        onError: (error) => {
            alert(error.response.data.error);
            alert("조회하여 수정기능을 이용 하소");
        },
    });

    const handleDeleteClick = (index) => {
        const copyListItem = [...routineList];
        copyListItem.splice(index, 1);
        setRoutineList(() => copyListItem);
        console.log(routineList);
    };

    const handleSubmitClick = () => {
        console.log(
            routineList.map((workoutRoutine, index) => {
                return {
                    reservationId: reservationId,
                    workoutId: workoutRoutine.routine.workout.value,
                    workoutRoutineCount: workoutRoutine.routine.count,
                    workoutRoutineSet: workoutRoutine.routine.set,
                    workoutRoutineWeight: workoutRoutine.routine.weight,
                    workoutRoutineOrder: index + 1,
                };
            })
        );
        userRoutineMutation.mutate(
            routineList.map((workoutRoutine, index) => {
                return {
                    reservationId: reservationId,
                    workoutId: workoutRoutine.routine.workout.value,
                    workoutRoutineCount: workoutRoutine.routine.count,
                    workoutRoutineSet: workoutRoutine.routine.set,
                    workoutRoutineWeight: workoutRoutine.routine.weight,
                    workoutRoutineOrder: index + 1,
                };
            })
        );
    };

    const handleCloseClick = () => {
        setRoutineList(() => []);
        setModalOpen(() => false);
    };

    return (
        <>
            <div css={s.btnWrapper}>
                <button css={s.modalOpenBtn} onClick={() => setModalOpen(true)}>
                    루틴 생성
                </button>
            </div>
            {modalOpen && (
                <div css={s.background}>
                    <div css={s.layout}>
                        <WorkoutSelect setRoutineList={setRoutineList} routineList={routineList} />
                        <span>등록한 카드를 좌우로 드래그하여 순서변경</span>
                        <ul css={s.routineCardBox}>
                            {routineList.map((item, index) => {
                                return (
                                    <li
                                        css={s.routineCard}
                                        key={index}
                                        draggable={true}
                                        onDragStart={() => dargStart(index)}
                                        onDragEnter={() => dragEnter(index)}
                                        onDragEnd={drop}
                                        onDragOver={(e) => e.preventDefault()}
                                    >
                                        <div css={s.workoutImgBox}>
                                            <img
                                                src={workout[item?.routine.category.value]?.img}
                                                alt="카테고리이미지"
                                            />
                                            <h1>{index + 1}</h1>
                                            <button onClick={() => handleDeleteClick(index)}>삭제</button>
                                        </div>
                                        <div css={s.routineInfoBox}>
                                            <div css={s.catrgoryBox}>
                                                <h4>{item?.routine.category?.label}:</h4>
                                                <h4>{item?.routine.workout?.label}</h4>
                                            </div>
                                            <div css={s.routineDetailBox}>
                                                <h4>{item?.routine.weight}kg</h4>
                                                <h4>{item?.routine.set}set</h4>
                                                <h4>{item?.routine.count}회</h4>
                                            </div>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                        <div css={s.buttonBox}>
                            <button disabled={routineList.length === 0} onClick={handleSubmitClick}>
                                전송
                            </button>
                            <button onClick={handleCloseClick}>닫기</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default MakeRoutineModal;
