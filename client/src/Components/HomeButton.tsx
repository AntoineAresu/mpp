import React from 'react';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';

export const HomeButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate(`/`)}
    >
      <HomeIcon/>Accueil
    </Button>
  )
}

export default HomeButton;
