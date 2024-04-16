/** @jsxImportSource @emotion/react */
import ReactSelect from "react-select";
import * as s from "./style";
import useWorkoutCategory from "../../../hooks/useWorkoutCategory";
import { useEffect } from "react";

function WorkoutSelect(props) {
    const workoutCategories = useWorkoutCategory();
    useEffect(() => {
        console.log(workoutCategories);
    }, []);
    return (
        <div>
            <ReactSelect
            // styles={s.selectStyle2}
            // options={s.searchTypeOption}
            // defaultValue={s.searchTypeOption[0]}
            // onChange={(e) => setSearchType(() => e.value)}
            />
            <ReactSelect
            // styles={s.selectStyle2}
            // options={s.searchTypeOption}
            // defaultValue={s.searchTypeOption[0]}
            // onChange={(e) => setSearchType(() => e.value)}
            />
        </div>
    );
}

export default WorkoutSelect;
