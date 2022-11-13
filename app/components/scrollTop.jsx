import {useEffect} from 'react'
import {useLocation} from '@remix-run/react';

function ScrollTop() {
    const {pathname} = useLocation();
    
    useEffect(() => {
        window.scrollTo(0,0);
    }, [pathname]);
  
    return null;
}

export default ScrollTop