import React from 'react';
import Numbers from './modules/Numbers';
import { forms } from '../jsons/forms';
import { formsPolice } from '../jsons/formsPolice';
import { formsDip } from '../jsons/formsDip';

const Face = () => {
    return (
        <section id='face' className='face'>
            <div className="mouth">
                <img src="img/car.png" alt="" />
            </div>
            <div className="h1">Автомобильные коды России</div>

			<ul class="circles circles-w">
				{forms.map((forms) => <li><Numbers {...forms} key={forms.s} /></li>)}
			</ul>

            <ul class="circles circles-b">
                {formsPolice.map((formsPolice) => <li><Numbers {...formsPolice} f={1} key={formsPolice.s}/></li>)}
			</ul>

            <ul class="circles circles-r">
                {formsDip.map((formsDip) => <li><Numbers {...formsDip} f={2} key={formsDip.s}/></li>)}
			</ul>

            
        </section>
    );
};

export default Face;