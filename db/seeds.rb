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
    image_url: "https://photos.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMzAwMjAzNDIvMDQ1MTczZTgzMDY4NWQ1OThkODIxMGQyNzU0NWQ5NmIuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==",
    description: "No Name Lake Trail is a 10.8 mile moderately trafficked out and back trail located near Antonito, Colorado that features a lake and is only recommended for very experienced adventurers.
    The trail is primarily used for hiking, nature trips, and bird watching and is best used from March until October. Dogs are also able to use this trail."
  },
  {
    name: "Rifle Arch Trail",
    city: "Rifle",
    state: "Colorado",
    image_url: "https://photos.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvNDQ0NTQxNjMvNzBmMjMxZWIwYzJjYTUyZTgyZTk0NzZiNTc2YTNkNjkuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==",
    description:"Rifle Arch Trail is a 2.8 mile lightly trafficked out and back trail located near Rifle,
    Colorado that offers scenic views and is rated as moderate. The trail is primarily used for hiking. Dogs are also able to use this trail but must be kept on leash."
  },
  {
    name: "Portage Pass Trail",
    city: "Whittier",
    state: "Alaska",
    image_url: "https://photos.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMjA4MjkyODAvMTZkMjQ4ODYyOTQ5ZjdmNjI5MDFjZjQ5ZDNjMzA2N2YuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==",
    description:"Portage Pass Trail is a 4.2 mile heavily trafficked out and back trail located near Whittier, Alaska that features a lake and is rated as moderate. 
    The trail offers a number of activity options and is best used from March until October. Dogs are also able to use this trail."
  },
  {
    name: "Grand Mesa Scenic Byway",
    city: "Mesa Lakes",
    state: "Colorado",
    image_url: "https://photos.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTk5MzMzNzMvNDNmNzE3YWE0Mjk0ZmVjMjYxZDkzNTI1NWQ3OGNlMDkuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==",
    description:"Grand Mesa Scenic Byway is a 61.4 mile moderately trafficked point-to-point trail located near Mesa Lakes, Colorado that features beautiful wild flowers and is good for all skill levels.
    The trail is primarily used for nature trips, bird watching, and scenic driving and is accessible year-round. Dogs are also able to use this trail."
  },
  {
    name: "Catherdal Lake Trail",
    city: "Aspen",
    state: "Colorado",
    image_url: "https://photos.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMjA2ODUyNTMvNGE2MjQ3NzgwN2Q4M2Y4YjliMjcwNmI4OTE1Yzk4YTQuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==",
    description:"Cathedral Lake Trail is a 5.4 mile heavily trafficked out and back trail located near Aspen, Colorado that features a lake and is rated as difficult. The trail is primarily used for hiking,
    camping, and backpacking and is best used from June until September. Dogs are also able to use this trail but must be kept on leash."
  },
  {
    name: "Dixie Mountain Loop Trail",
    city: "Phoenix",
    state: "Arizona",
    image_url: "https://photos.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvNDIzMjk0MjkvYWJmZmU0YzY1MGY0NDM4NjBhMjI2OTMxZTIwZWQ4YjcuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==",
    description:"Dixie Mountain Loop Trail is a 4.6 mile heavily trafficked loop trail located near Phoenix, Arizona that features beautiful wild flowers and is rated as moderate. 
    The trail is primarily used for hiking, running, horses, and mountain biking and is accessible year-round. Dogs are also able to use this trail but must be kept on leash."
  },
  {
    name: "Multnomah Falls",
    city: "Bridal Vei",
    state: "Oregon",
    image_url: "https://photos.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvNDQ2MjE1MTEvZmFkNjRlYzNjZGY3YzdhYTIyZmZjNzU1Njg2ODgzM2EuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==",
    description:"Explore this 2.40 mile, out and back trail near Bridal Veil, Oregon. Generally considered a moderately challenging route, it takes an average of 1 h 31 min to complete. This is a very popular area for hiking, so you'll likely encounter other people while exploring. 
    The trail is open year-round and is beautiful to visit anytime. Dogs are welcome, but must be on a leash."
  },
  {
    name: "Lands End Trail",
    city: "San Francisco",
    state: "California",
    image_url: "https://photos.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMzU0ODU0NDcvNTUwY2JiNjIxOWM4Y2U5NGVkNTcyNWZiOWE1Y2RiMjIuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==",
    description:"Lands End Trail is a 3.4 mile heavily trafficked loop trail located near San Francisco, California that features beautiful wild flowers and is rated as moderate. 
    The trail is primarily used for hiking, walking, running, and nature trips and is accessible year-round. Dogs are also able to use this trail but must be kept on leash."
  },
  {
    name: "Queen’s Garden Trail",
    city: "Bryce",
    state: "Utah",
    image_url: "https://photos.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTA5MDMzMTcvOGQxODExOGI4NjQ4YWI4Yjc0MDlhZjNkNGVhY2MwMDIuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==",
    description:"Discover this 2.90 mile, loop trail near Bryce, Utah. Generally considered a moderately challenging route, it takes an average of 1 h 36 min to complete. This is a very popular area for hiking, so you'll likely encounter other people while exploring. 
    The trail is open year-round, but the best times to visit are March through October. You'll need to leave pups at home — dogs aren't allowed on this trail."
  },
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
  {
    user_id: 1,
    trail_id: 3
  },
  {
    user_id: 2,
    trail_id: 1
  },
  {
    user_id: 2,
    trail_id: 4
  },
  {
    user_id: 2,
    trail_id: 5
  }
])