import { MapsContextProvider } from './maps/context';

const GlobalContext: React.FC<any> = ({ children }) => {
  return <MapsContextProvider>{children}</MapsContextProvider>;
};

export default GlobalContext;
