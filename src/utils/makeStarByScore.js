import { FaStar } from "react-icons/fa";

export const makeStarByScore = (score) => {
    let stars = [];
    for (let i = 0; i < score; i++) {
        stars.push(<FaStar color="gold" key={i} />);
    }
    return stars;
};
