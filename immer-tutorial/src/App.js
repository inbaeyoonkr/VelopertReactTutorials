import React, { useRef, useCallback, useState } from 'react';
import produce from 'immer';

const App = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({
    name: '',
    username: ''
  });
  const [data, setData] = useState({
    array: []
  });

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username
      };
      setData(
        produce(data, draft => {
          draft.array.push(info);
        })
      );
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
      const { name, value } = e.target;
      setForm(
        produce(form, draft => {
          draft[name] = value;
        })
      );
    },
    [data, form.name, form.username]
  );
  /*
  const onRemove = useCallback(
    id => {
      setData({
        ...data,
        array: data.array.filter(info => info.id !== id)
      });
    },
    [data]
  );
  */

  const onRemove = useCallback(
    id => {
      setData(
        produce(data, draft => {
          draft.array.splice(draft.array.findIndex(info => info.id === id), 1);
        })
      );
    },
    [data]
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name='username'
          value={form.username}
          placeholder='아이디'
          onChange={onChange}
        />
        <input
          name='name'
          value={form.name}
          placeholder='이름'
          onChange={onChange}
        />
        <button type='submit'>등록</button>
      </form>
      <div>
        <ul>
          {data.array.map(info => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              <b>아이디: </b> {info.username}
              {' / '}
              <b>이름: </b> {info.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
