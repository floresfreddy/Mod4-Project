class UserSerializer < ActiveModel::Serializer
  attributes :username, :avatar, :bio, :id, :terms, :messages
end
