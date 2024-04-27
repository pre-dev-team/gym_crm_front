/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useRef, useState } from "react";
import WorkoutSelect from "../../WorkoutSelect/WorkoutSelect";
import { useMutation } from "react-query";
import { makeRoutineRequest } from "../../../apis/api/workout";
import { workout } from "../../../assets/workoutImg/workoutImg";

function SelectRoutineModal({ reservationId }) {
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
    };

    const userRoutineMutation = useMutation({
        mutationKey: "userRoutineMutation",
        mutationFn: makeRoutineRequest,
        retry: 0,
        onSuccess: (response) => {
            alert("등록 완료");
        },
        onError: (error) => {
            alert("에러");
        },
    });

    const handleDeleteClick = (index) => {
        const copyListItem = [...routineList];
        copyListItem.splice(index, 1);
        setRoutineList(() => copyListItem);
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
                    루틴 조회
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
                                        onDragStart={() => dargStart(item.index)}
                                        onDragEnter={() => dragEnter(item.index)}
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
                                수정
                            </button>
                            <button onClick={handleCloseClick}>닫기</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default SelectRoutineModal;
