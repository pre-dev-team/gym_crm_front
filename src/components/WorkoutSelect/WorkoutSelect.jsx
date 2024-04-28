/** @jsxImportSource @emotion/react */
import * as s from "./style";
import Select from "react-select";
import { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import useWorkouts from "../../hooks/useWorkouts";

function WorkoutSelect({ setRoutineList, routineList }) {
    const [workoutOptions, setWorkoutOptions] = useState(s.initialWorkoutOption);
    const [isNameSelect, setIsNameSelect] = useState(s.initialSelectNameState);
    const { workouts, workoutCategories } = useWorkouts(workoutOptions.category.value);

    useEffect(() => {
        setWorkoutOptions((prev) => {
            return {
                ...prev,
                workout: {
                    value: 0,
                    label: "",
                },
            };
        });
        setIsNameSelect(() => {
            return {
                ...s.initialSelectNameState,
                category: true,
            };
        });
    }, [workoutOptions.category]);

    const handleSelectChange = (e, name) => {
        setWorkoutOptions((prev) => {
            return {
                ...prev,
                [name]: e,
            };
        });
        setIsNameSelect((prev) => {
            return {
                ...prev,
                [name]: true,
            };
        });
    };

    const handleValueChange = (e, val) => {
        const { name, value } = e.target;
        if (val !== null) {
            if (val === 0) {
                setWorkoutOptions((prev) => {
                    return {
                        ...prev,
                        [name]: 0,
                    };
                });
                setIsNameSelect((prev) => {
                    return {
                        ...prev,
                        [name]: false,
                    };
                });
            } else {
                setWorkoutOptions((prev) => {
                    return {
                        ...prev,
                        [name]: parseInt(prev[name]) + parseInt(val),
                    };
                });
            }
        } else {
            setWorkoutOptions((prev) => {
                return {
                    ...prev,
                    [name]: value,
                };
            });
        }

        setIsNameSelect((prev) => {
            return {
                ...prev,
                [name]: true,
            };
        });
    };

    const handleConfirmClick = () => {
        if (routineList.length === 3) {
            alert("최대 루틴은 3종류까지 가능합니다");
            return;
        }
        setRoutineList((prev) => [...prev, { routine: workoutOptions, index: prev.length }]);
        setWorkoutOptions(() => s.initialWorkoutOption);
        setIsNameSelect(() => s.initialSelectNameState);
    };

    return (
        <>
            <div css={s.selectBox}>
                <Select
                    styles={s.selectStyle}
                    options={workoutCategories}
                    value={workoutOptions.category}
                    onChange={(e) => handleSelectChange(e, "category")}
                    placeholder="부위"
                />
                <Select
                    styles={s.selectStyle}
                    options={workouts}
                    value={workoutOptions.workout}
                    onChange={(e) => handleSelectChange(e, "workout")}
                    placeholder="운동선택"
                    isDisabled={!isNameSelect.category}
                />
            </div>
            <div css={s.cards}>
                <div css={s.inputCard}>
                    <div css={s.cardTitle}>
                        <h3>무게 입력</h3>
                        <button
                            name="weight"
                            onClick={(e) => handleValueChange(e, 0)}
                            disabled={workoutOptions.weight === 0}
                        >
                            초기화
                        </button>
                    </div>
                    <input
                        name={"weight"}
                        type="text"
                        value={workoutOptions.weight}
                        onChange={(e) => handleValueChange(e)}
                        placeholder="무게 입력"
                        disabled={!isNameSelect.workout}
                    />
                    <div css={s.buttonBox}>
                        <button
                            name={"weight"}
                            onClick={(e) => handleValueChange(e, 5)}
                            disabled={!isNameSelect.workout}
                        >
                            +5
                        </button>
                        <button
                            name={"weight"}
                            onClick={(e) => handleValueChange(e, 10)}
                            disabled={!isNameSelect.workout}
                        >
                            +10
                        </button>
                        <button
                            name={"weight"}
                            onClick={(e) => handleValueChange(e, 20)}
                            disabled={!isNameSelect.workout}
                        >
                            +20
                        </button>
                    </div>
                </div>
                <div css={s.inputCard}>
                    <div css={s.cardTitle}>
                        <h3>세트 입력</h3>
                        <button name="set" onClick={(e) => handleValueChange(e, 0)} disabled={workoutOptions.set === 0}>
                            초기화
                        </button>
                    </div>
                    <input
                        name={"set"}
                        type="text"
                        value={workoutOptions.set}
                        onChange={(e) => handleValueChange(e)}
                        placeholder="세트 입력"
                        disabled={!isNameSelect.weight}
                    />
                    <div css={s.buttonBox}>
                        <button name={"set"} onClick={(e) => handleValueChange(e, 1)} disabled={!isNameSelect.weight}>
                            +1
                        </button>
                        <button name={"set"} onClick={(e) => handleValueChange(e, 3)} disabled={!isNameSelect.weight}>
                            +3
                        </button>
                        <button name={"set"} onClick={(e) => handleValueChange(e, 5)} disabled={!isNameSelect.weight}>
                            +5
                        </button>
                    </div>
                </div>
                <div css={s.inputCard}>
                    <div css={s.cardTitle}>
                        <h3>개수 입력</h3>
                        <button
                            name="count"
                            onClick={(e) => handleValueChange(e, 0)}
                            disabled={workoutOptions.count === 0}
                        >
                            초기화
                        </button>
                    </div>
                    <input
                        name={"count"}
                        type="text"
                        value={workoutOptions.count}
                        onChange={(e) => handleValueChange(e)}
                        placeholder="개수 입력"
                        disabled={!isNameSelect.set}
                    />
                    <div css={s.buttonBox}>
                        <button name={"count"} onClick={(e) => handleValueChange(e, 1)} disabled={!isNameSelect.set}>
                            +1
                        </button>
                        <button name={"count"} onClick={(e) => handleValueChange(e, 5)} disabled={!isNameSelect.set}>
                            +5
                        </button>
                        <button name={"count"} onClick={(e) => handleValueChange(e, 10)} disabled={!isNameSelect.set}>
                            +10
                        </button>
                    </div>
                </div>
            </div>
            <div css={s.confirmBox}>
                <button onClick={handleConfirmClick} disabled={Object.values(isNameSelect).includes(false)}>
                    <IoIosArrowDown size={"20px"} />
                </button>
            </div>
        </>
    );
}

export default WorkoutSelect;
