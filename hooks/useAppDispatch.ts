import { useDispatch } from 'react-redux';
import { AppDispatch } from './store'; // Import the AppDispatch type from your store configuration


export const useAppDispatch = () => useDispatch<AppDispatch>();
