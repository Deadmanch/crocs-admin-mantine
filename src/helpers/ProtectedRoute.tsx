import { Navigate } from 'react-router-dom';
import { useUserStore } from '@/store/userStore';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useUserStore((state) => state.user);
  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
