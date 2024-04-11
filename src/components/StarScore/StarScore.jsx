/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

const starIcon = css`
    margin-right: 2px;
    cursor: pointer;
`;

function StarScore({ setScore }) {
    const [stars, setStars] = useState([
        {
            score: 1,
            state: "none",
        },
        {
            score: 2,
            state: "none",
        },
        {
            score: 3,
            state: "none",
        },
        {
            score: 4,
            state: "none",
        },
        {
            score: 5,
            state: "none",
        },
        {
            score: 6,
            state: "none",
        },
        {
            score: 7,
            state: "none",
        },
        {
            score: 8,
            state: "none",
        },
        {
            score: 9,
            state: "none",
        },
        {
            score: 10,
            state: "none",
        },
    ]);

    const handleStarClick = (score) => {
        setStars(() =>
            stars.map((star) => {
                if (star.score <= score) {
                    return {
                        ...star,
                        state: "click",
                    };
                } else if (star.score >= score) {
                    return {
                        ...star,
                        state: "none",
                    };
                }
            })
        );
        setScore(() => score);
    };

    const handleStarMouseOver = (score) => {
        setStars(() =>
            stars.map((star) => {
                if (star.score <= score) {
                    return {
                        ...star,
                        state: "hover",
                    };
                } else if (star.score >= score) {
                    return {
                        ...star,
                        state: "none",
                    };
                }
            })
        );
    };

    return (
        <div>
            {stars.map((star) => {
                return (
                    <FaStar
                        key={star.score}
                        size={24}
                        color={star.state === "click" ? "gold" : star.state === "hover" ? "gold" : "grey"}
                        onClick={() => handleStarClick(star.score)}
                        onMouseEnter={() => handleStarMouseOver(star.score)}
                        css={starIcon}
                    />
                );
            })}
        </div>
    );
}

export default StarScore;
