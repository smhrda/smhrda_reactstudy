import React from 'react';
import styled, { css } from 'styled-components';
// polished 라이브러리를 사용해 darken, lighten과 같은 유틸 함수 사용 -> 색상 변화 가능
import { darken, lighten } from 'polished';

/* 색상 */
const colorStyles = css`
    ${({ theme, color }) => {
        const selected = theme.palette[color];
        return css`
        background: ${selected};
        &:hover {
            background: ${lighten(0.1, selected)};
        }
        &:active {
            background: ${darken(0.1, selected)};
        }
        ${props => props.outline && css`
            color: ${selected};
            background: none;
            border: 1px solid ${selected};
            &:hover {
                background: ${selected};
                color: white;
            }
        `}    
        `
    }}`;

/* 크기 */
const sizes = {
    large: {
        height: '3rem',
        fontSize: '1.25rem'
    },
    medium: {
        height: '2.25rem',
        fontSize: '1rem'
    },
    small: {
        height: '1.75rem',
        fontSize: '0.875rem'
    },
}


const sizeStyles = css`
  ${({ size }) => css`
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
  `}
`;


const fullWidthStyle = css`
    ${props => props.fullWidth && css`
        width: 100%;
        &:not(:first-child) {
            margin-left: 0;
            margin-top: 1rem;
        }
        `}
`;

const StyledButton = styled.button`
    /* 공통 스타일 */
    display: inline-flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;

    /* 크기 */
    ${sizeStyles}
    

    /* 색상 */
    ${colorStyles}

    /* 기타 */
    &:not(:first-child) {   // & + & 로 작성 시 5.2.0부터는 오류 뜸!
        margin-left: 1rem;
    }

    ${fullWidthStyle}
`;





function Button({ children, color, size, outline, fullWidth,  ...rest }) {
    return <StyledButton color={color} size={size} outline={outline} fullWidth = {fullWidth} {...rest}>{children}</StyledButton>
}

Button.defaultProps = {
    color: 'blue',
    size: 'medium'
};

export default Button;
