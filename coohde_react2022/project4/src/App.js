import React, { useState } from 'react';
import Header from './compo/Header';
import Nav from './compo/Nav';
import Article from './compo/Article';
import Create from './compo/Create';
import Update from './compo/Update';


function App() {
    // const _mode= useState('Welcome'); //useState인자 : 상태 초깃값
    // console.log('_mode', _mode); //['Welcome', f()]
    // const mode = _mode[0]; //상태값 읽어오기
    // const setMode = _mode[1]; //상태값 변경 함수
    const [mode, setMode] = useState('Welcome');
    const [id, setId] = useState(null); //초깃값 없음
    const [nextId, setNextId] = useState(4);
    const [topics, setTopics] = useState([
        { id: 1, title: 'html', body: 'html is ...' },
        { id: 2, title: 'css', body: 'css is ...' },
        { id: 3, title: 'javascript', body: 'javascript is ...' }
    ])
    let content = null;
    let contextControl = null;
    if (mode === 'Welcome') {
        content = <Article title="Welcome" body="Hello, WEB"></Article>
    } else if (mode === 'READ') {
        let title, body = null; //초기화
        for (let i = 0; i < topics.length; i++) {
            if (topics[i].id === id) { //state의 id와 일치하는 값을 찾아서 title, body 지정
                title = topics[i].title;
                body = topics[i].body;
            }
        }
        content = <Article title={title} body={body}></Article>
        contextControl = <>
            <li><a href={"/update" + id} onClick={event => {
                event.preventDefault();
                setMode('UPDATE');
            }}>Update</a></li>
            <li><input type="button" value="Delete" onClick={() => {
                const newTopics = []
                for (let i = 0; i < topics.length; i++) {
                    if (topics[i].id !== id) {
                        newTopics.push(topics[i]);
                    }
                }
                setTopics(newTopics);
                setMode('Welcome');
            }} /></li>
        </>
    } else if (mode === 'CREATE') {
        content = <Create onCreate={(_title, _body) => {
            const newTopic = { id: nextId, title: _title, body: _body }
            const newTopics = [...topics]
            newTopics.push(newTopic);
            setTopics(newTopics);
            setMode('READ');
            setId(nextId);
            setNextId(nextId + 1);
        }}></Create>
    } else if (mode === 'UPDATE') {
        let title, body = null;
        for (let i = 0; i < topics.length; i++) {
            if (topics[i].id === id) {
                title = topics[i].title;
                body = topics[i].body;
            }
        }
        content = <Update title={title} body={body} onUpdate={(title, body) => {
            //업데이트된 값으로 변경하기
            const newTopics = [...topics]
            const updatedTopic = { id: id, title: title, body: body }
            for (let i = 0; i < newTopics.length; i++) {
                if (newTopics[i].id === id) {
                    newTopics[i] = updatedTopic; //업데이트
                    break;
                }
            }
            setTopics(newTopics);
            setMode('READ');
        }}></Update>
    }
    return (
        <div>
            <Header title="WEB" onChangeMode={() => {
                setMode('Welcome');
            }}></Header>
            <Nav topics={topics} onChangeMode={(_id) => {
                setMode('READ');
                setId(_id);
            }}></Nav>
            {content}
            <ul>
                <li><a href="/create" onClick={event => {
                    event.preventDefault();
                    setMode('CREATE');
                }}>Create</a></li>
                {contextControl}
            </ul>
        </div>
    );
}

export default App;