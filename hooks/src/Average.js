import React, { useState, useMemo, useCallback, useRef } from 'react';

const getAverage = numbers => {
  console.log('평균값 계산중');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [value, setValue] = useState('');
  const inputEl = useRef(null);

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []); // 컴포넌트가 처음 렌더링될 때만 함수 생성

  const onInsert = useCallback(
    e => {
      const nextList = list.concat(parseInt(value));
      setList(nextList);
      setValue('');
      inputEl.current.focus(); // button 누르면 포커스가 인풋 쪽으로 넘어간다.
    },
    [value, list]
  ); // number 혹은 list가 바뀌었을 때만 함수 생성

  const avg = useMemo(() => getAverage(list), [list]);
  return (
    <div>
      <input value={value} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>submit</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>average: </b> {avg}
      </div>
    </div>
  );
};

export default Average;
