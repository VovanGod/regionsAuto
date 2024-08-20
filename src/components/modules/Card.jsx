import React from 'react';

const Card = ({name, image, def, str, f = 2, primary = '0'}) => {
    let s = `${str}`;
    s = s.split(' ', f)
    let num = s;
    return (
        <div className="wrapCard">
            <div className="card-header">
                {name}
                {primary == '1' ? 
                    <img src="img/star.svg" alt="star" />
                : ''}
            </div>
            <div className='card'>
                <div className="card-light">
                    <div className="main">
                            <img src={`img/${image}.jpg`} alt={name} />
                    </div>
                    <div className="secondary secondary0">
                        {def}
                        <div className="secondary-bottom">
                            RUS
                            <img src="img/flag.jpg" alt="Флаг России нафиг" />
                        </div>
                    </div>
                    {num.map((num, index) => (
                    <div className={`secondary secondary${index+2}`} >
                        {num}
                        <div className="secondary-bottom">
                            RUS
                            <img src="img/flag.jpg" alt="Флаг России нафиг" />
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Card;