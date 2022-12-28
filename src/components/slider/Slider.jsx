import React, {useState} from 'react';

import style from "./Slider.module.css";
import Button from '@mui/material/Button';
import {iconsData} from "../../mockData";


export const Slider = () => {
    const [offset, setOffset] = useState(0)

    const nextButtonClick = () => {
        setOffset(offset - 800)
        if (offset === -3200) setOffset(0)
    }

    const prevButtonClick = () => {
        setOffset(offset + 800)
        if (offset === 0) setOffset(-3200)
    }

    return (
        <div className={style.slider}>
            <Button color="secondary" onClick={prevButtonClick}>Prev</Button>
            <div className={style.slider__line}>
                {iconsData.map(icon => {
                    return (
                        <div
                            style={{transform: `translateX(${offset}px)`}}
                            className={style.container}
                            key={icon.id}
                        >
                            <img src={icon.icon} alt="Аниме"/>
                        </div>
                    )
                })}
            </div>
            <Button color="secondary" onClick={nextButtonClick}>Next</Button>
        </div>
    );
};

export default Slider;




