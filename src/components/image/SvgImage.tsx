import React, { HTMLAttributes } from 'react';
import { SvgUtils } from '../../utils/SvgUtils';
import styled from 'styled-components';

interface SvgImageProps extends HTMLAttributes<HTMLDivElement> {
    width?: number;
    height?: number;
}

const SvgImage = ({ width, height, className, ...props }: SvgImageProps) => {
    const defautSize = '100px';
    const suffix = 'px';

    const styleSize: React.CSSProperties = {
        width: width ? width + suffix : defautSize,
        height: height ? height + suffix : defautSize,
    };

    return (
        <SvgImageStyled>
            {' '}
            <div style={styleSize} className={className} {...props}>
                {SvgUtils.logo}
            </div>
        </SvgImageStyled>
    );
};

export default SvgImage;

const SvgImageStyled = styled.div`
    svg {
        width: 100%;
        height: 100%;
    }
`;
