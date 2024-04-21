/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./style"; // CSS style imports
import WorkoutSelect from "./WorkoutSelect/WorkoutSelect";
import SelectRoutine from "./SelectRoutine/SelectRoutine";
import { FaArrowRight } from "react-icons/fa";

function MakeRoutine() {
    const [routineInfoList, setRoutineInfoList] = useState([]);

    return (
        <div css={s.background}>
            <div css={s.layout}>
                <div css={s.boxLayout}>
                    
                    <div css={s.inLayout}>
                        <div css={s.routineSelectBox}>
                         <WorkoutSelect routineInfoList={routineInfoList} setRoutineInfoList={setRoutineInfoList} />
                            <SelectRoutine routineInfoList={routineInfoList} setRoutineInfoList={setRoutineInfoList} />
                        </div>
                    
                    <div css={s.iconBox}>
                        <FaArrowRight onClick={routineInfoList} css={s.arrowRight} />
                    </div>
                    <div css={s.selectBox}>
                            {routineInfoList.map((routine, index) => (
                                        <div css={s.card} key={index}>
                                            <div>순서: {index + 1}</div>
                                            <div>운동부위: {routine.category}</div>
                                            <div>운동: {routine.workout}</div>
                                            <div>무게: {routine.weights}</div>
                                            <div>세트 x 개수: {routine.sets} * {routine.counts}</div>
                                            <div>총개수: {routine.sets * routine.counts}</div>
                                        </div>
                                    ))}
                    </div>
                    </div>
                </div>
                <div css={s.dragBox}>
                   
                    
                </div>
            </div>
        </div>
    );
}

export default MakeRoutine;