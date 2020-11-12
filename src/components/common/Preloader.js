import React from 'react';
import { styled } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';

const DivPreloader = styled('div')({
  position: 'fixed',
  top: 0,
  width: '100%',
  height: '100%',
  backgroundColor: '#fff',
  zIndex: 9999,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

export const Preloader = ({classes}) => {
  return (
    <DivPreloader className={classes}>
      <CircularProgress />
    </DivPreloader>
  )
}
