# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Term.destroy_all

20.times do 
    user = User.create(username: Faker::Name.name, password_digest: Faker::Code.npi, bio: Faker::Quote.famous_last_words, avatar: "https://picsum.photos/#{rand(1..300)}")
    Term.create(terms:"", user_id:user.id)
end 
