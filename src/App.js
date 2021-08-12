import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LoadingPage from './pages/Loading.page';
import MainPage from './pages/Main.page';
import { fetchCreatures } from './store/actions';
import BASE_URL from './api';

function App() {
  const [loading, setLoading] = useState(false);
  let [completed, setCompleted] = useState(60);
  const creatures_url = 'creatures';

  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);

    dispatch(fetchCreatures(BASE_URL + creatures_url));
  }, []);

  return (
    <>
      {false ? (
        <LoadingPage completed={completed} />
      ) : (
        <Switch>
          <Route exact path="/" component={MainPage} />
          {/* <Route exact path="/description/:id" component={DescriptionPage} /> */}
        </Switch>
      )}
    </>
  );
}

export default App;
