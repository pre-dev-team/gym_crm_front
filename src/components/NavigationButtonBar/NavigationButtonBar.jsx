/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';
import * as s from './style';
import { FaHome } from "react-icons/fa";
import { FaCalendarDays, FaUser } from "react-icons/fa6";

function NavigationButtonBar(props) {
    return (
        <div css={s.layout}>
            <Link css={s.buttonBox}> 
                <div>
                    <FaCalendarDays />
                </div>
                <span>
                Reservation            
                </span>
            </Link>
            <Link css={s.buttonBox}> 
                <div>
                    <FaHome />
                </div>
                <span>
                Home  
                </span>          
            </Link>
            <Link css={s.buttonBox}> 
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