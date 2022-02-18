# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts " Seeding users..."
User.create([
  {
    username: "Jeri",
    password: "abc123",
    password_confirmation: "abc123",
    bio: "Hi"
  },
  {
    username: "Sejo",
    password: "abc123",
    password_confirmation: "abc123",
    bio: "Yoooooo"
  }
])

puts " Seeding trails..."
Trail.create([
  {
    name: "No Name Lake Trail",
    city: "Antonito",
    state: "Colorado",
    image_url: "https://www.aspentrailfinder.com/wp-content/uploads/2014/03/No-Name-Trail.jpg",
    description: "No Name Lake Trail is a 10.8 mile moderately trafficked out and back trail located near Antonito, Colorado that features a lake and is only recommended for very experienced adventurers.
    The trail is primarily used for hiking, nature trips, and bird watching and is best used from March until October. Dogs are also able to use this trail."
  },
  {
    name: "Rifle Arch Trail",
    city: "Rifle",
    state: "Colorado",
    image_url: "https://cdn.postindependent.com/wp-content/uploads/sites/6/2016/06/RifleArch-RCT-062614-2-1-1240x930.jpg",
    description:"Rifle Arch Trail is a 2.8 mile lightly trafficked out and back trail located near Rifle,
    Colorado that offers scenic views and is rated as moderate. The trail is primarily used for hiking. Dogs are also able to use this trail but must be kept on leash."
  },
  {
    name: "Rifle Falls Coyote to Bobcat Trails",
    city: "Silt",
    state: "Colorado",
    image_url: "https://2.bp.blogspot.com/-Yu_udbyPrPA/T7a1MbksOUI/AAAAAAAAJdo/7keEtyCMrqM/s1600/Rifle%2B446.JPG",
    description:"Rifle Falls Coyote to Bobcat Trails is a 3.4 mile heavily trafficked out and back trail located near Silt, Colorado that features a waterfall and is good for all skill levels.
    The trail is primarily used for hiking, walking, and nature trips. Dogs are also able to use this trail but must be kept on leash."
  },
  {
    name: "Grand Mesa Scenic Byway",
    city: "Mesa Lakes",
    state: "Colorado",
    image_url: "https://www.imagesfromcolorado.com/images/xl/Grand-Mesa-Scenic-Byway-7-1.jpg",
    description:"Grand Mesa Scenic Byway is a 61.4 mile moderately trafficked point-to-point trail located near Mesa Lakes, Colorado that features beautiful wild flowers and is good for all skill levels.
    The trail is primarily used for nature trips, bird watching, and scenic driving and is accessible year-round. Dogs are also able to use this trail."
  },
  {
    name: "Catherdal Lake Trail",
    city: "Aspen",
    state: "Colorado",
    image_url: "https://static.rootsrated.com/image/upload/s--tH7h9lrS--/t_rr_large_traditional/msatbgzm4gtt0smx4vpl.jpg",
    description:"Cathedral Lake Trail is a 5.4 mile heavily trafficked out and back trail located near Aspen, Colorado that features a lake and is rated as difficult. The trail is primarily used for hiking,
    camping, and backpacking and is best used from June until September. Dogs are also able to use this trail but must be kept on leash."
  },
  {
    name: "West Maroon Trail",
    city: "Aspen",
    state: "Colorado",
    image_url: "https://www.protrails.com/protrails/galleries/West%20Maroon%20Pass%20-%20crater%20lake%20descent.jpg",
    description:"West Maroon Trail is a 20.4 mile moderately trafficked out and back trail located near Aspen, Colorado that features a lake and is rated as difficult. The trail is primarily used for hiking,
    camping, nature trips, and bird watching and is best used from April until September. Dogs are also able to use this trail but must be kept on leash."
  }
])

puts " Seeding reviews..."
Review.create([
  {
    summary: "Noice",
    text: "Lovely place", 
    rating: 5.0, 
    user_id: 2, 
    trail_id: 1
  },
  { 
    summary: "Aight. Kinda muddy",
    text: "slipped and ate chocolate",
    rating: 2.0,
    user_id: 1,
    trail_id: 1
  }
])

puts " Seeding favorites..."
Favorite.create([
  {
    user_id: 1,
    trail_id: 1
  },
  {
    user_id: 1,
    trail_id: 2
  },
  user_id: 1,
  trail_id: 3
])