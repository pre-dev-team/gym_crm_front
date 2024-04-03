/** @jsxImportSource @emotion/react */
import * as s from './style';
import { FaCaretLeft } from "react-icons/fa6";
import logo from '../../assets/image/test.png';
import { useNavigate } from 'react-router-dom';

function RootHeader(props) {
    const navigate = useNavigate();
    return (
        <div css={s.layout}>
            <div css={s.buttonBox} onClick={() => navigate(-1)}> <FaCaretLeft/ > </div>
            <div css={s.buttonBox}>
                <span> 현재페이지 </span>
            </div>
            <div css={s.buttonBox}>
                <img src={logo} />
            </div>
            
        </div>
    );
}

export default RootHeader;