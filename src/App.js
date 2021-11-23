import React, {useState} from 'react';
import axios  from 'axios';

const App = () => {
  const [data, setData] = useState(null);
  const key = '20157d23252f48eab333eb30dc0651d2';
  const onClick = async ()  => {
    try {
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr&apiKey=${key}`)
      setData(response.data);
    }catch(err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
    </div>
  )
}

export default App;
