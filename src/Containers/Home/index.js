import React, {useState, useEffect} from 'react';

const Home = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('https://api.waqi.info/feed/beijing/?token=3f56311483ca3b17d7ac4645526a4b5ef9a65586')
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if(data) {
    return <div>{JSON.stringify(data)}</div>
  }
return null;
}

export default Home;