import { useEffect, useState } from "react";

function SelectRoutine({ routineInfoList, setRoutineInfoList, selectedWorkout, clickedRoutine }) {
  const [weights, setWeights] = useState("");
  const [counts, setCounts] = useState("");
  const [sets, setSets] = useState("");

  useEffect(()=>{
    if(!!clickedRoutine){ 
      setWeights(()=>clickedRoutine?.weights)
      setCounts(()=>clickedRoutine?.counts)
      setSets(()=>clickedRoutine?.sets)
    }
  },[clickedRoutine]);

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
      {/* <button onClick={handleSubmitClick}>제출</button> */}
    </div>
  );
}

export default SelectRoutine;