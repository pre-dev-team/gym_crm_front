/** @jsxImportSource @emotion/react */
import * as s from './style';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { FaCalendarDays, FaUser } from "react-icons/fa6";

function NavigationButtonBar(props) {
    return (
        <div css={s.layout}>
            <Link css={s.buttonBox} to={"/user/reservation"}> 
                <div>
                    <FaCalendarDays />
                </div>
                <span>
                Reservation            
                </span>
            </Link>
            <Link css={s.buttonBox} to={"/"}> 
                <div>
                    <FaHome />
                </div>
                <span>
                Home  
                </span>          
            </Link>
            <Link css={s.buttonBox} to={"/user/mypage"}> 
                <div>
                    <FaUser />
                </div>
                <span>
                MyPage
                </span>
            </Link>
        </div>
    );
}

export default NavigationButtonBar;