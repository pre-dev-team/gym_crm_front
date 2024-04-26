/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useRef, useState } from "react";
import WorkoutSelect from "../../MakeRoutine/WorkoutSelect/WorkoutSelect";
import { useMutation } from "react-query";
import { userRoutineRequest } from "../../../apis/api/workout";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";

function RoutineModal({ reservationId }) {
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

    const drop = (e) => {
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
        mutationFn: userRoutineRequest,
        onSuccess: (response) => {
            alert("전송 완료");
        },
    });

    const handleSubmitClick = () => {
        console.log(reservationId);
        const sendingList = routineList.map((routineInfo, index) => ({
            reservationId: reservationId,
            workoutId: routineInfo.workout.value,
            workoutRoutineCount: routineInfo.counts,
            workoutRoutineSet: routineInfo.sets,
            workoutRoutineWeight: routineInfo.weights,
            workoutRoutineOrder: index + 1,
        }));
        console.log(sendingList);
        userRoutineMutation.mutate(sendingList);
    };

    return (
        <>
            <div css={s.btnWrapper}>
                <button css={s.modalOpenBtn} onClick={() => setModalOpen(true)}>
                    모달 열기
                </button>
            </div>
            {modalOpen && (
                <div css={s.background}>
                    <div css={s.layout}>
                        <WorkoutSelect setRoutineList={setRoutineList} />
                        <ul css={s.routineCardBox}>
                            {routineList.map((item, index) => (
                                <li
                                    css={s.routineCard}
                                    key={index}
                                    draggable={true}
                                    onDragStart={(e) => dargStart(e, item.index)}
                                    onDragEnter={(e) => dragEnter(e, item.index)}
                                    onDragEnd={drop}
                                    onDragOver={(e) => e.preventDefault()}
                                >
                                    <div css={s.workoutImgBox}>
                                        <img src="" alt="" />
                                        <h1>{index + 1}</h1>
                                    </div>
                                    <div css={s.routineInfoBox}>
                                        <div css={s.catrgoryBox}>
                                            <h4>{item.routine.workout?.label}</h4>
                                        </div>
                                        <div css={s.routineDetailBox}>
                                            <h4>{item.routine.weight}kg</h4>
                                            <h4>{item.routine.set}set</h4>
                                            <h4>{item.routine.count}회</h4>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <button css={s.modalClose} onClick={() => setModalOpen(false)}>
                            모달 닫기
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default RoutineModal;
