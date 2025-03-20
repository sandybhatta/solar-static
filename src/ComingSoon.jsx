import React from 'react';

const ComingSoon = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f0f0f0',
    },
    message: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: '#2d3e50',
      textAlign: 'center',
    },
    subMessage: {
      fontSize: '1.5rem',
      color: '#888',
      marginTop: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <div>
        <div style={styles.message}>Coming Soon</div>
        <div style={styles.subMessage}>We are working on something awesome!</div>
      </div>
    </div>
  );
};

export default ComingSoon;
