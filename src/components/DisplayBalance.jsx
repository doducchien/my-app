import React from 'react';
import { Statistic } from 'antd'


function DisplayBalance({ title, value, color = 'black' }) {
    return (
        <Statistic
            title={title}
            value={value}
            precision={3}
            style={{textAlign: 'center'}}
            valueStyle={{ color: color, textAlign: 'center' }}
        />

    );
}

export default DisplayBalance;