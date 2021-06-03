import React from 'react';
import map from '../../image/Map.png';

const PickUp = () => {
    return (
        <div>
            <div style={{ float: 'left' }}>
                <input type="text" name="" id="" placeholder="Pick from" />
                <br />
                <input type="text" name="" id="" placeholder="Pick To" />
                <br />
                <input type="button" value="Submit" />
            </div>
            <div style={{ float: 'right', marginTop: '50px', marginRight: '40px' }}>
                <img src={map} alt="" />
            </div>
        </div>
    );
};

export default PickUp;