import { useTitleContext } from "../hooks/useTitleContext"

const Profile = () => {

  const { state } = useTitleContext()

  return (
    <div style={state}>Profile</div>
  )
}

export default Profile