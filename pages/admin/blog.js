import {useEffect} from 'react'
export default function Blog() {
    useEffect(() => {
        window.location.href = "http://localhost:1337/admin/auth/login";
      }, []);
    return (
        <div>
            
        </div>
    )
}
