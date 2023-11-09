


import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div style={styles.container}>
            <p>404</p>
            <p>Page Not Found</p>
            <Link to="/" style={styles.button}>Go Back</Link>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    },
    button: {
        marginTop: '20px',
        textDecoration: 'none',
        backgroundColor: '#007bff',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default Error;
