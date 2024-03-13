import { Auth0Provider } from "@auth0/auth0-react"
import { FC } from "react"
import { useNavigate } from "react-router-dom"

type Auth0ProviderWithNavigateProps = {
  children: React.ReactNode
}

const Auth0ProviderWithNavigate: FC<Auth0ProviderWithNavigateProps> = ({ children }) => {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL
  const audience = import.meta.env.VITE_AUTH0_AUDIENCE

  const navigate = useNavigate()

  if (!domain || !clientId || !redirectUri || !audience) {
    throw new Error("Unable to initialise auth")
  }

  const onRedirectCallback = () => {
    navigate("/auth-callback")
  }
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: redirectUri, audience }}
      onRedirectCallback={onRedirectCallback}
    >
      {" "}
      {children}
    </Auth0Provider>
  )
}

export default Auth0ProviderWithNavigate
