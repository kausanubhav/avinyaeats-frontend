import { useAuth0 } from "@auth0/auth0-react"
import { Button } from "./ui/button"
import UsernameMenu from "./UsernameMenu"

export default function MainNav() {
  const { loginWithRedirect, isAuthenticated } = useAuth0()
  return (
    <span className="flex space-x-2 items-center">
      {isAuthenticated ? (
        <UsernameMenu />
      ) : (
        <Button
          variant="outline"
          className="font-bold text-orange-500 hover:text-orange-700 hover:bg-white border-orange-500"
          onClick={async () => await loginWithRedirect()}
        >
          Log In
        </Button>
      )}
    </span>
  )
}
