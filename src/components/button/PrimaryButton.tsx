import { Button } from 'antd';
import { BaseButtonProps } from 'antd/es/button/button';
import React from 'react';
import styled from 'styled-components';
import './button.scss';
import { ButtonColorType } from './buttonHelpers';

interface ButtonProps extends BaseButtonProps {
    colortype?: ButtonColorType;
    children?: React.ReactNode;
    onClick?: (onSuccess: () => void) => void;
    iconcustom?: React.ReactNode;
    classnamecus?: {
        icon: string;
    };
}

const PrimaryButton = ({ ...props }: ButtonProps) => {
    const { onClick, colortype, iconcustom, classnamecus, className } = props;

    const onSuccess = () => {
        alert(JSON.stringify(className));
    };

    const handleClick = () => {
        onClick == null || onClick === void 0 ? void 0 : onClick(onSuccess);
    };

    return (
        <StyledButton
            {...props}
            onClick={handleClick}
            className={colortype ? `primary-btn__${colortype}` : 'primary-btn__default'}
        >
            {iconcustom && <div className={`icon-default ${classnamecus ? classnamecus.icon : ''}`}>{iconcustom}</div>}
            {props.children}
        </StyledButton>
    );
};

export default PrimaryButton;

const StyledButton = styled(Button)<ButtonProps>`
    border: none;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.5rem;
    border-radius: 0.5rem;
`;
