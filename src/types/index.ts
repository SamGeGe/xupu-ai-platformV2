export interface User {
  username: string;
  name: string;
  role: string;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface FeatureButtonProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
  variant?: 'default' | 'special';
}