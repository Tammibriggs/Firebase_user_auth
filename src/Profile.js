import './profile.css'
import {useAuthValue} from './AuthContext'

function Profile() {
  const {currentUser} = useAuthValue()

  return (
      <div className='center'>
        <div className='profile'>
          <h1>Profile</h1>
          <p><strong>Email: </strong>{currentUser?.email}</p>
          <p>
            <strong>Email verified: </strong>
            {`${currentUser?.emailVerified}`}
          </p>
          <span>Sign Out</span>
        </div>
      </div>
  )
}

export default Profile
