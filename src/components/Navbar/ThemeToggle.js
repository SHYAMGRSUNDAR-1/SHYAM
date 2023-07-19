import { Button } from 'components/Button';
import { useAppContext } from 'hooks';
import { useId } from 'react';
import styles from './ThemeToggle.module.css';

export const ThemeToggle = ({ isMobile, ...rest }) => {
  const { dispatch } = useAppContext();
  const id = useId();
  const maskId = `${id}theme-toggle-mask`;

  const handleClick = () => {
    dispatch({ type: 'toggleTheme' });
  };

};
