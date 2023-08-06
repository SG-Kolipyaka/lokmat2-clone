import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const PrivateRoute = ({ children }) => {
  const router = useRouter();
  const isAuth = useSelector((state) => state.adminReducer.isAuth);

  useEffect(() => {
    // Check if the user is authenticated
    if (!isAuth) {
      router.push('/login'); // Redirect to the login page if not authenticated
    }
  }, [isAuth, router]);

  // Render the protected component if the user is authenticated
  return isAuth ? children : null;
};

export default PrivateRoute;
