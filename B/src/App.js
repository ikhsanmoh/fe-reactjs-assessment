import { useSelector, useDispatch } from 'react-redux';
import { locationTypes } from './constants/actionTypes';

const {
  STORE_SUCCESS,
  STORE_FAIL,
  STORE_DESTROY
} = locationTypes

const App = () => {
  const state = useSelector(state => state)
  const dispatch = useDispatch()

  const updateData = () => { }

  return (
    <div>
      Hallo
    </div>
  );
}

export default App;
