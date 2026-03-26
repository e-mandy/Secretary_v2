import { useEffect, useState } from 'react';
import Spinner from '../../../components/Spinner';
import { Outlet } from 'react-router-dom';
import { useRefreshToken } from '../../../hooks/useRefreshToken';

const PersistLogin = () => {
    const refresh = useRefreshToken();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const verifyRefreshToken = async () => {
            try{
                await refresh();
            }catch(e: any){
                
            }finally{
                setIsLoading(false);
            }
        }

        verifyRefreshToken();
    }, []);

  return isLoading ? (
    <div className='h-screen w-screen flex m-auto'>
        <Spinner width='30' height='30' color='red' visible={true} />
        <p>Veuillez patienter un instant</p>
    </div>
  ) : <Outlet />
}

export default PersistLogin
