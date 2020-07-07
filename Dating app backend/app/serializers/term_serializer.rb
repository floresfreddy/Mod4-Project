class TermSerializer < ActiveModel::Serializer
  attributes :id, :terms, :user_id
end
