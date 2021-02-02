function Button({inverted, href, children}) {
  const buttonStyle = {
    backgroundColor: inverted ? '#D8385E' : 'white',
    border: inverted ? '1px solid #D8385E' : '1px solid black',
    borderRadius: '32px',
    color: inverted ? 'white' : 'black',
    display: 'inline-block',
    outline: 'none',
    padding: '20px 30px',
    textDecoration: 'none',
  };

  /*
  const buttonStyle = {
    backgroundColor: '#D8385E',
    border: '1px solid #D8385E',
    borderRadius: '32px',
    color: 'white',
    display: 'inline-block',
    outline: 'none',
    padding: '20px 30px',
    textDecoration: 'none',
  };
  */

  return (
    <>
      {href ? (
        <a href={href} style={buttonStyle}>{children}</a>
      ) : (
        <button style={buttonStyle}>{children}</button>
      )}
    </>
  );
}

export default Button;
