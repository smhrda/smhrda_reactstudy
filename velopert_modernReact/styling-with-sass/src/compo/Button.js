import React from 'react';
import './Button.scss';
import classNames from 'classnames'; // classnames 라이브러리 임포트

const Button = ({ children, size, color, outline, fullWidth, ...rest }) => {
    // className에 CSS 클래스 이름을 동적으로 넣을 때
    // return <button className={['Button', size].join(' ')}>{children}</button>;

    // classnames 라이브러리를 사용할 때
    return (
        // 객체 안의 값(outline, fullwidth)은 true 일 때만 적용
        // rest를 사용해 지정된 props 이외의 값들을 모아서 관리(onClick, onMouseMove 등의 이벤트 관리)
        <button
            className={classNames('Button', size, color, {
                outline,
                fullWidth,
                ...rest,
            })}
            {...rest}
        >
            {children}
        </button>
    );
};

Button.defaultProps = {
    size: 'medium',
    color: 'blue',
};

export default Button;
