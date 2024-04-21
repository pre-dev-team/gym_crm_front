import { useState } from "react";

function SelectRoutine({ routineInfoList, setRoutineInfoList, selectedWorkout }) {
  const [weights, setWeights] = useState("");
  const [counts, setCounts] = useState("");
  const [sets, setSets] = useState("");

  const handleSubmitClick = () => {
    if (selectedWorkout && weights !== "" && counts !== "" && sets !== "") {
      const newRoutine = {
        category: selectedWorkout.category,
        workout: selectedWorkout.label,
        weights: parseFloat(weights),
        counts: parseInt(counts),
        sets: parseInt(sets),
      };
      const updatedList = [...routineInfoList, newRoutine];
      setRoutineInfoList(updatedList);

      // 입력값 초기화
      setWeights("");
      setCounts("");
      setSets("");
    }
  };

  return (
    <div>
      {/* 운동 선택, 입력 항목들 */}
      <button onClick={handleSubmitClick}>제출</button>
    </div>
  );
}

export default SelectRoutine;