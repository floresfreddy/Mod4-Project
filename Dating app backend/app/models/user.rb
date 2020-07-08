class User < ApplicationRecord
    has_secure_password
    validates :username, uniqueness: { case_sensitive: false }
    has_many :terms 
    has_many :messages, :class_name=> 'Message', :foreign_key =>'sender_id'
    has_many :messages, :class_name=> 'Message', :foreign_key =>'user_id'
end
