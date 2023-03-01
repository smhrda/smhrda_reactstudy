import React from "react";

type GreetingsProps = {
  name: string;
  mark: string;
  optional?: string; // 있어도 되고 없어도 되면 ? 사용
  onClick: (name: string) => void; // 아무것도 리턴하지 않으면 void 사용
};

/* // React.FC - props 타입을 generics로 넣어서 사용
// - props에 기본적으로 children이 들어있음
// - defaultProps, propType, contextTypes를 설정할 때 자동완성
//  - 단점 : children이 있어 props 타입 안에 children 설정을 해야 함
//  - mark 의 defualtProps 값을 지정해주더라도, mark 값이 없으면 작동 안함
// ==> 사용 권장 X
const Greetings: React.FC<GreetingsProps> = ({name, mark}) => (
    <div>Hello, {name} {mark}</div>
) */

function Greetings({ name, mark, optional, onClick }: GreetingsProps) {
  const handleClick = () => onClick(name);
  return (
    <div>
      Hello, {name} {mark}
      {optional && <p>{optional}</p>}
      <div>
        <button onClick={handleClick}>Click Me!</button>
      </div>
    </div>
  );
}

Greetings.defaultProps = {
  mark: "!",
};

export default Greetings;
