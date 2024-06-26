/** @jsxImportSource @emotion/react */
import * as s from "./style";

function RootLayout({ children }) {
    return (
        <>
            <div css={s.background}></div>
            <div css={s.layout}>
                <div css={s.container}>{children}</div>
            </div>
        </>
    );
}

export default RootLayout;
