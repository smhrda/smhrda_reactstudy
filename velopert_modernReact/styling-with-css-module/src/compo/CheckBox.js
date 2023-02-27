import React from 'react';
// react-icons 라이브러리 - 아이콘을 컴포넌트로 사용 가능
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import styles from './CheckBox.module.css';
import classNames from 'classnames/bind';

// classnames의 bind : CSS 클래스 이름 지정 시,
//          styles.checkbox 대신 cx('checkbox') 형식으로 사용 가능
//          => 여러 개의 클래스 사용이나 조건부 스타일링 시 편리
const cx = classNames.bind(styles);

const CheckBox = ({ children, checked, ...rest }) => {
    return (
        <div className={cx('checkbox')}>
            <label>
                <input type="checkbox" checked={checked} {...rest} />
                <div>
                    {checked ? (
                        <MdCheckBox className={cx('checked')} />
                    ) : (
                        <MdCheckBoxOutlineBlank />
                    )}
                </div>
            </label>
            <span>{children}</span>
        </div>
    );
};

export default CheckBox;
