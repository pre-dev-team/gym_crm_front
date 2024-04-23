import Select from "react-select";
import * as s from "./style";
import { useState, useEffect } from "react";
import useWorkouts from "../../../hooks/useWorkouts";
import { useMutation } from "react-query";

function WorkoutSelect({ routineInfoList, setRoutineInfoList, clickedRoutine, clickedIndex, setClickedIndex }) {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedWorkout, setSelectedWorkout] = useState(null);
    const [selectedId, setSelectedId] = useState(null);
    const [weights, setWeights] = useState(0);
    const [counts, setCounts] = useState(0);
    const [sets, setSets] = useState(0);
    const [showInputs, setShowInputs] = useState(false); // 입력 부분 보이기 여부 상태

    const [workouts, workoutCategories] = useWorkouts(selectedId);

    useEffect(() => {
        if (!!clickedRoutine) {
            setShowInputs(true);
            setSelectedCategory(clickedRoutine.category);
            setSelectedWorkout(clickedRoutine.workout);
            setWeights(clickedRoutine.weights);
            setCounts(clickedRoutine.counts);
            setSets(clickedRoutine.sets);
        }
    }, [clickedRoutine]);

    

    const handleCategoryChange = (e) => {
        setSelectedCategory(e);
        setSelectedId(e?.value);
        setSelectedWorkout(null); // 카테고리 변경 시 운동 선택 초기화
        setShowInputs(true); // 입력 부분 보이기
        resetInputs(); // 입력값 초기화
    };

    const handleWorkoutChange = (e) => {
        setSelectedWorkout(e);
        setShowInputs(true); // 운동 선택 시 입력 부분 보이기
        resetInputs(); // 입력값 초기화
    };

    const resetInputs = () => {
        setWeights(0);
        setCounts(0);
        setSets(0);
    };

    const handleWeightIncrement = (value) => {
        setWeights((prevWeights) => prevWeights + value);
    };

    const handleSetIncrement = (value) => {
        setSets((prevSets) => prevSets + value);
    };

    const handleCountIncrement = (value) => {
        setCounts((prevCounts) => prevCounts + value);
    };

    const handleEditClick = () => {
        if (clickedIndex !== null && selectedWorkout) {
            const updatedRoutineList = [...routineInfoList];
            updatedRoutineList[clickedIndex] = {
                category: selectedCategory,
                workout: selectedWorkout,
                weights: weights,
                counts: counts,
                sets: sets,
            };
            setRoutineInfoList(updatedRoutineList); // 수정된 루틴 정보를 MakeRoutine으로 전달
            setShowInputs(false); // 입력 부분 숨기기
            setSelectedId(null); // 카테고리 선택 초기화
            setClickedIndex(null); // 수정 완료 후 clickedIndex 초기화
        }
    };

    const handleSubmitClick = () => {
        if (selectedWorkout) {
            const updatedRoutineInfoList = [
                ...routineInfoList,
                {
                    category: selectedCategory,
                    workout: selectedWorkout,
                    weights,
                    counts,
                    sets,
                },
            ];
            setRoutineInfoList(updatedRoutineInfoList);
            resetInputs(); // 입력값 초기화
            setShowInputs(false); // 입력 부분 숨기기
            // 선택 상태 초기화
            setSelectedCategory(null);
            setSelectedWorkout(null);
            setSelectedId(null); // 카테고리 선택 초기화
        }
    };

    return (
        <>
            <div css={s.selectLayout}>
                <Select
                    styles={s.selectStyle2}
                    options={workoutCategories}
                    value={selectedCategory}
                    onChange={(e) => handleCategoryChange(e)}
                    placeholder="부위"
                />
                <Select
                    styles={s.selectStyle2}
                    options={workouts}
                    value={selectedWorkout}
                    onChange={(e) => handleWorkoutChange(e)}
                    placeholder="종목"
                    isDisabled={!selectedCategory}
                />
            </div>
            {showInputs && selectedWorkout && (
                <div>
                    <div>
                        <h3>무게 입력</h3>
                        <input
                            type="text"
                            value={weights}
                            onChange={(e) => setWeights(e.target.value)}
                            placeholder="무게 입력"
                        />
                        <div>
                            <button onClick={() => handleWeightIncrement(5)}>+5</button>
                            <button onClick={() => handleWeightIncrement(10)}>+10</button>
                            <button onClick={() => handleWeightIncrement(20)}>+20</button>
                        </div>
                    </div>
                    <div>
                        <h3>세트 입력</h3>
                        <input
                            type="text"
                            value={sets}
                            onChange={(e) => setSets(e.target.value)}
                            placeholder="세트 입력"
                        />
                        <div>
                            <button onClick={() => handleSetIncrement(1)}>+1</button>
                            <button onClick={() => handleSetIncrement(3)}>+3</button>
                            <button onClick={() => handleSetIncrement(5)}>+5</button>
                        </div>
                    </div>
                    <div>
                        <h3>개수 입력</h3>
                        <input
                            type="text"
                            value={counts}
                            onChange={(e) => setCounts(e.target.value)}
                            placeholder="개수 입력"
                        />
                        <div>
                            <button onClick={() => handleCountIncrement(1)}>+1</button>
                            <button onClick={() => handleCountIncrement(8)}>+8</button>
                            <button onClick={() => handleCountIncrement(12)}>+12</button>
                            <button onClick={() => handleCountIncrement(20)}>+20</button>
                        </div>
                        <div css={s.confirmBox}>
                            {clickedIndex !== null ? (
                                <button onClick={handleEditClick}>수정 완료</button>
                            ) : (
                                <button onClick={handleSubmitClick}>제출</button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default WorkoutSelect;
