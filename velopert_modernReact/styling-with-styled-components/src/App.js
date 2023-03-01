import React, { useState } from 'react'
import styled, { css, ThemeProvider } from 'styled-components'
import Button from './compo/Button';
import Dialog from './compo/Dialog';

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: ${props => props.color || 'black'};
  border-radius: 50%;
  /* 여러 줄의 CSS 코드를 조건부로 보여주려면 css를 불러와서 사용해야 함 */
  ${props => props.huge && css`width: 10rem; height: 10rem;`}
  `;

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
  `;

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }`



function App() {
  // return <Circle color='blue' huge />

  const [dialog, setDialog] = useState(false);
  const onClick = () => {
    setDialog(true);
  }
  const onConfirm = () => {
    console.log('확인');
    setDialog(false);
  }
  const onCancel = () => {
    console.log('취소');
    setDialog(false);
  }


  return (
    <ThemeProvider
      theme={{
        palette: {
          blue: '#228be6',
          gray: '#495057',
          pink: '#f06595'
        }
      }}>
        <>
      <AppBlock>
        <ButtonGroup>
          <Button size="large">BUTTON</Button>
          <Button>BUTTON</Button>
          <Button size="small">BUTTON</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button color="gray" size="large">
            BUTTON
          </Button>
          <Button color="gray">BUTTON</Button>
          <Button color="gray" size="small">
            BUTTON
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button color="pink" size="large">
            BUTTON
          </Button>
          <Button color="pink">BUTTON</Button>
          <Button color="pink" size="small">
            BUTTON
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button size="large" outline>
            BUTTON
          </Button>
          <Button color="gray" outline>
            BUTTON
          </Button>
          <Button color="pink" size="small" outline>
            BUTTON
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button size="large" fullWidth>
            BUTTON
          </Button>
          <Button size="large" color="gray" fullWidth>
            BUTTON
          </Button>
          <Button size="large" color="pink" fullWidth onClick={onClick}>
            삭제
          </Button>
        </ButtonGroup>
      </AppBlock>
      <Dialog 
        title="정말로 삭제하시겠습니까?"
        confirmText='삭제' 
        cancelText='취소'
        onConfirm={onConfirm}
        onCancel={onCancel}
        visible={dialog}
      >
        데이터를 정말로 삭제하시겠습니까?
      </Dialog>
      </>
    </ThemeProvider>
  )
}

export default App;