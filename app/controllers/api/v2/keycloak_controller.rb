require 'jwt'
module Api
  module V2
    class KeycloakController < ActionController::Base
      include ApplicationShared
      def signin
        jwt = JWT.decode(params[:token], nil, false)
        user = User.find_or_create_external_user(
          { login: jwt.first["preferred_username"],
            mail: jwt.first["email"],
            firstname: jwt.first["given_name"],
            lastname: jwt.first["family_name"]
          }, Setting['authorize_login_delegation_auth_source_user_autocreate'])
        if user
          set_current_user User.unscoped.except_hidden.find_by_login(jwt.first["preferred_username"])
        else 
          raise JWT::DecodeError
        end
      rescue JWT::DecodeError => e
        # JWT raises error if the token is not valid. Add code for invalid token here.        
      end

      def api_request?
        true
      end
    end
  end
end
