import { useParams } from 'react-router-dom';
import { CreateUser } from '../components/UserLogin/CreateUser';
import { UserLogin } from '../components/UserLogin/UserLogin';

export function Login() {
  const { route } = useParams<{ route: string }>()

  return (
    <div className="bg-green-900 flex min-h-screen">
      { route === 'create' ? <CreateUser /> : <UserLogin /> }
    </div>
  )
}
