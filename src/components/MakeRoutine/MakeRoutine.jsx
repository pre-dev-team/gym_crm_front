/** @jsxImportSource @emotion/react */
import WorkoutSelect from "./WorkoutSelect/WorkoutSelect";
import * as s from "./style";

function MakeRoutine(props) {
    return (
        <div css={s.background}>
            <div css={s.layout}>
                <div css={s.routineSelectBox}>
                    <WorkoutSelect />
                    <div css={s.routineOption}>
                        <div>{/* weight */}</div>
                        <div>{/* set */}</div>
                        <div>{/* time */}</div>
                    </div>
                </div>
                <div css={s.iconBox}>{/* > 방향아이콘 */}</div>
                <div>
                    <div css={s.dragBox}>{/* drag  */}</div>
                    <div css={s.confirmBox}>
                        <button>제출</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MakeRoutine;
