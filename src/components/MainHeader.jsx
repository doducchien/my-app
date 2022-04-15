import React from 'react';
import { Typography } from 'antd';

function MainHeader({level=4, title}) {
    return (
        <Typography.Title level={level}>{title}</Typography.Title>

    );
}

export default MainHeader;