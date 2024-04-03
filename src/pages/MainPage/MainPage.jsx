/** @jsxImportSource @emotion/react */
import * as s from './style';
import logo from '../../assets/image/test.png'

// 메인페이지입니다

function MainPage(props) {
    return (
        <div css={s.test}>
                <img src={logo} />
                <span>team-pre-dev</span>
        </div>
    );
}

export default MainPage;