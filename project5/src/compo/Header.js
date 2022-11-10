const Header = (props) => {
    //console.log('props', props, props.title);
    return (
        <header>
            <h1><a href="/" onClick={(event) => {
                event.preventDefault(); //기본 이벤트 방지 -> 클릭해도 리로드 x
                props.onChangeMode();
            }}>{props.title}</a></h1>
        </header>
    )
}

export default Header;