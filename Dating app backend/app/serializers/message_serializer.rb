class MessageSerializer < ActiveModel::Serializer
  attributes :id, :message, :user_id, :sender_id
end
