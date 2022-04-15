import React from 'react';
import { Divider, Row, Col } from 'antd';
import DisplayBalance from './DisplayBalance';


function DisplayBalances(props) {
    return (
        <>
            <Divider />
            <Row align='middle'>
                <Col span={12} style={{ display: 'flex', justifyContent: 'center' }}>
                    <DisplayBalance title="Income" value={1253.54} color="green" />
                </Col>
                <Col span={12} style={{ display: 'flex', justifyContent: 'center' }}>
                    <DisplayBalance title="Expenses" value={623.50} color="red" />
                </Col>
            </Row>
            <Divider />
        </>
    );
}

export default DisplayBalances;