10.times do
  name = Faker::Games::WorldOfWarcraft.hero
  avatar = Faker::Avatar.image(name, '100x400', 'png', 'set4')
  Friend.create(name: name, avatar: avatar)
end

puts "10 friends created"