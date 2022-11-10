const Nav = (props) => {
    const lis = []
    for (let i = 0; i < props.topics.length; i++) {
        let t = props.topics[i];
        lis.push(<li key={t.id}>
            <a id={t.id} href={'/read' + t.id} onClick={event => {
                event.preventDefault();
                props.onChangeMode(Number(event.target.id)); //태그 속성으로 넘기면 문자가 됨 -> 형변환
            }}>{t.title}</a>
        </li>)
    }
    return <nav>
        <ol>
            {lis}
        </ol>
    </nav>
}

export default Nav;