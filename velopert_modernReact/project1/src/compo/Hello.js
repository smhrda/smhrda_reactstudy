import React from 'react'

const Hello = ({color, name, isSpecial}) => {
    return (
        <div style={{color}}>
            {isSpecial && <b>special</b>}
            Hello {name}
        </div>
    )
}

Hello.defaultProps = {
    name:"이름 없옹"
}

export default Hello