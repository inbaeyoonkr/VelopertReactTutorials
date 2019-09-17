import React, { useRef, useState, useCallback } from 'react';

const App = () => {
  const nextId = useRef(1); // local로만 쓰일 변수
  const [form, setForm] = useState({
    name: '',
    username: ''
  });
  const [data, setData] = useState({
    array: [],
    uselessValue: null
  });

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      const info = {
        id: nextId,
        name: form.name,
        username: form.username
      };
      setData({
        ...data,
        array: data.array.concat(info)
      });

      setForm({
        name: '',
        username: ''
      });
      nextId.current += 1;
    },
    [data, form.name, form.username]
  );

  const onChange = useCallback(
    e => {
      setForm({
        ...form,
        [e.target.name]: e.target.value
      });
    },
    [form]
  );

  const onRemove = useCallback(
    id => {
      setData({
        ...data,
        array: data.array.filter(info => info.id !== id)
      });
    },
    [data]
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name='username'
          placeholder='아이디'
          value={form.username}
          onChange={onChange}
        />
        <input
          name='name'
          placeholder='이름'
          value={form.name}
          onChange={onChange}
        />
        <button type='submit'>등록</button>
      </form>
      <div>
        <ul>
          {data.array.map(info => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.username} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
