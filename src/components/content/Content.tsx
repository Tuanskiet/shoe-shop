import React from 'react';
import { Col, Divider, Row } from 'antd';

const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };

const Content: React.FC = () => {
    return (
        <>
            <Divider orientation="left">Horizontal</Divider>
            <Row>
                <Col style={style} span={24}>
                    col
                </Col>
            </Row>
            <Row gutter={16}>
                <Col style={style} span={12}>
                    col-12
                </Col>
                <Col style={style} span={12}>
                    col-12
                </Col>
            </Row>
            <Row>
                <Col style={style} span={8}>
                    col-8
                </Col>
                <Col style={style} span={8}>
                    col-8
                </Col>
                <Col style={style} span={8}>
                    col-8
                </Col>
            </Row>
            <Row>
                <Col style={style} span={6}>
                    col-6
                </Col>
                <Col style={style} span={6}>
                    col-6
                </Col>
                <Col style={style} span={6}>
                    col-6
                </Col>
                <Col style={style} span={6}>
                    col-6
                </Col>
            </Row>

            <Divider orientation="left">sub-element align left</Divider>
            <Row justify="start">
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
            </Row>
        </>
    );
};

export default Content;
