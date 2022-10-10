-- Users table seeds here (Example)
INSERT INTO users (name, age, gender, picture) VALUES 
('Lawrence Barker', 24, 'male', 'https://cdn-icons-png.flaticon.com/128/4333/4333609.png'),
('Ashley Ketchup',28, 'female', 'https://cdn-icons-png.flaticon.com/128/4140/4140047.png'),
('Shauna Benton', 18, 'male', 'https://cdn-icons-png.flaticon.com/128/3940/3940403.png'),
('Millicent Sawyer', 37, 'female', 'https://cdn-icons-png.flaticon.com/128/921/921124.png'),
('Richard Kim', 32, 'male','https://cdn-icons-png.flaticon.com/128/2202/2202112.png'),
('Sadie Carrillo', 22, 'male', 'https://cdn-icons-png.flaticon.com/128/219/219969.png'),
('Geraldo Haley', 30, 'male', 'https://cdn-icons-png.flaticon.com/512/892/892785.png'),
('Celeste Archer', 20, 'female', 'https://cdn-icons-png.flaticon.com/128/706/706830.png'),
('Garry Mcclure', 16, 'male', 'https://cdn-icons-png.flaticon.com/128/366/366343.png'),
('Philip Macias', 18, 'male', 'https://cdn-icons-png.flaticon.com/128/145/145843.png'),
('Millie Jones', 24, 'female', 'https://cdn-icons-png.flaticon.com/128/1785/1785896.png'),
('Timothy Horton', 32, 'male', 'https://cdn-icons-png.flaticon.com/128/1785/1785896.png'),
('Olivia Maynard', 27, 'female', 'https://cdn-icons-png.flaticon.com/128/1081/1081055.png');

INSERT INTO categories (name) VALUES
('Food & Dining'),
('Games & Recreation'),
('Fitness'),
('Outdoors'),
('Alcohol & Beverages'),
('Movies & Theatre'),
('Live Music'),
('Chatting & Philosophy'),
('Water Sports'),
('Entrepreneurial & Business'),
('Arts'),
('Health & Wellness');

INSERT INTO events (name, image, description, size_limit, owner_id, category, city, lat, lng, start_time, end_time) VALUES
('Coffee Chat', 'https://images.squarespace-cdn.com/content/v1/5b97eba69f8770a3639818de/1601497107704-YWY5VZU9Q5IHAPQZ983M/image-asset.jpeg', 'Join me for a lovely chat over a nice cup of coffee. Invites welcome!', 3, 1, 1, 'Calgary', 51.0233064354121, -114.02369425973428, '2022-10-13 05:00:00', '2022-10-13 16:00:00'),

('Movie Night', 'https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Top_Gun_Maverick_Poster.jpg/220px-Top_Gun_Maverick_Poster.jpg', 'I am looking for someone to watch Top Gun with! All my friensd have already watched it already', 3, 5, 6, 'Vancouver', 49.282126, -123.124361, '2022-10-13 18:00:00', '2022-10-13 21:00:00'),

('Board Games', 'https://i.cbc.ca/1.2716999.1406221490!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/135000779-board-games.jpg', 'Come join me for some fun board games this could include battleship, monopoly, and risk!', 8, 2, 2, 'Vancouver', 49.25825320517397, -123.04434376344798, '2022-09-28 12:00:00', '2022-09-28 11:00:00'),

('Tennis', 'https://imageio.forbes.com/specials-images/imageserve//6297a140ad5629573ba5f667/0x0.jpg?format=jpg&width=1200', 'Come play some tennis with me im super good though ill probably mess you up!', 4, 3, 4, 'Richmond', 49.15964422830105, -123.13337467011768, '2022-10-13 16:00:00', '2022-10-13 18:00:00'),

('Early Morning Hiking', 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGlraW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80', 'come for a nice hike with me but we have to get up at 3am to see sunrise on top of mountain', 10, 4, 4, 'North Vancouver', 49.37341791072464, -123.09637524954998, '2022-09-29 18:00:00', '2022-09-29 20:00:00'),

('Chess Club', 'https://c4.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_695,g_auto,q_auto,dpr_2.6,f_auto,h_460/gxknjgscx8ci7ayvxxve', 'Come play Chess with us! Try new strategies, discuss tactics and meet people. Free admission', 8, 5, 2, 'Vancouver', 49.282126, -123.124361, '2022-10-13 18:00:00', '2022-10-13 21:00:00'),

('Dinner Party', 'https://cdn77-s3.lazycatkitchen.com/wp-content/uploads/2020/09/basil-tofu-steak-dinner-close-up-1024x1536.jpg', 'Come enjoy a nice porkchop entree with a side potatoes and green beans tossed in a cabernet reduction', 6, 1, 1, 'Vancouver', 49.276189979572884, -123.12153898959998, '2022-09-30 15:00:00', '2022-09-30 17:00:00'),

('Lets Eat Curry!', 'https://www.simplyrecipes.com/thmb/1SXZ_F1GC6ww_ppWnrdbKgHi9fQ=/2000x1333/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__01__Butter-Chicken-LEAD-2-6ca76f24bbe74114a09958073cb9c76f.jpg', 'Come enjoy one of the finest dishes from the best indian food resturant in town!', 6, 5, 1, 'Smallville', 49.28053130736995, -123.11693171231532, '2022-10-13 13:00:00', '2022-10-13  14:00:00'),

('Seafood Restaurant', 'https://lh5.googleusercontent.com/p/AF1QipO05bf-v-UnqlrcwtSN85qOHwKr36gBKFQvf4ox=w408-h272-k-no', 'All my friends are allergic to shellfish. Looking forward to eating some delicious oysters', 6, 3, 1, 'Vancouver', 49.27087406969367, -123.1365432973447, '2022-10-13 17:00:00', '2022-10-13 20:00:00'),

('Ouiji Board Night', 'https://cdn.britannica.com/79/159579-050-12877F0B/Ouija-board.jpg', 'Join and reveal what the Ouiji board has to say to you!', 4, 7, 2, 'Calgary', 51.0233064354121, -114.02369425973428, '2022-10-13 05:00:00', '2022-10-13 16:00:00'),

('SmashMouth live', 'https://www.pedestrian.tv/wp-content/uploads/2016/06/shreksmashmouth2-619-386.jpg', 'Come listen to their hit single All Star for 2 full hours nonstop! All Ages Event', 8, 5, 7, 'Vancouver', 49.25825320517397, -123.04434376344798, '2022-09-28 12:00:00', '2022-09-28 11:00:00'),

('Axe Throwing', 'https://pbs.twimg.com/media/DedVcGiU0AAcu2i.jpg', 'Come throw Axes at Axe & Grind. Rip and Tear!', 4, 3, 2, 'Calgary', 51.00014902432434, -114.05746754412783, '2022-10-13 16:00:00', '2022-10-13 18:00:00'),

('Hackathon #26!', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.-88rbxQR_gTJMvLBbUkfDgHaEK%26pid%3DApi&f=1&ipt=88849c2e5f24aee6413de3a7fc4d629a547e4679ba65bfa9c9e2aa0a55861f7c&ipo=images', 'Bring your laptop, and plan out a project! All experience levels welcome', 10, 4, 10, 'North Vancouver', 49.37341791072464, -123.09637524954998, '2022-09-29 18:00:00', '2022-09-29 20:00:00'),

('Coffee Meetup at Timmies', 'https://i.cbc.ca/1.2745771.1583184837!/fileImage/httpImage/tim-hortons.jpg', 'Please come drink our burnt Coffee. We are desperate!', 5, 7, 1, 'Edmonton', 53.553994615145655, -113.51464194180745, '2022-09-20 13:00:00', '2022-09-20 14:00:00'),

('Bar Hopping', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Hbe9Fea2NL9MJuyc7ShRkAHaE7%26pid%3DApi&f=1&ipt=ef2cff58b29b6a6eae0ae0c2e1d128db41b3ca8af05816d1d5a301ba28a50fa3&ipo=images', 'Lets start at this bar, and start tomorrow with a hangover! ', 6, 1, 5,  'Vancouver', 49.276189979572884, -123.12153898959998, '2022-09-30 15:00:00', '2022-09-30 17:00:00'),

('Korean Fried Chicken', 'https://hips.hearstapps.com/hmg-prod/images/190130-korean-fried-chicken-050-1549695542.jpg', 'I have never tried Korean Fried Chicken, and thought it would be fun to invite you!', 6, 1, 1, 'Calgary', 51.06175514246862, -114.06300902165728, '2022-09-30 15:00:00', '2022-09-30 17:00:00'),

('Bare Hand Meditation', 'https://images.everydayhealth.com/images/emotional-health/meditation/a-complete-guide-to-meditation-722x406.jpg?w=1110', 'Lets stare at the sun to charge our third eye chakras while inhaling burning sage fumes. Relaxing and wholstic!', 6, 5, 12, 'Vancouver', 49.28053130736995, -123.11693171231532, '2022-10-13 13:00:00', '2022-10-13  14:00:00'),

('Live Grass Drawing', 'https://en.canson.com/sites/default/files/styles/large/public/medias-images/New-Dessin-001-2%20%281%29.jpg?itok=i1oaN4tC', 'Bored of being boring? Come outside where we focus on drawing blades of grass. All experience levels welcome!', 6, 3, 11, 'Whitehorse', 60.76801044773849, -135.3522855246778, '2022-10-13 17:00:00', '2022-10-13 20:00:00'),

('Sushi Time', 'https://www.readersdigest.ca/wp-content/uploads/2011/11/japanese-sushi-rolls-scaled.jpg', 'I see you too are a person of culture. Lets get Sushi!', 6, 3, 1, 'Vancouver', 49.276778603471904, -123.125723820729, '2022-10-13 17:00:00', '2022-10-13 20:00:00'),

('Chop Steakhouse Dining', 'https://i.ytimg.com/vi/nsw0Px-Pho8/maxresdefault.jpg', 'Come eat the finest Steak chops with us!', 8, 8, 1, 'Calgary', 51.0943441322179, -113.99897456996281, '2022-10-13 17:00:00', '2022-10-13 20:00:00');


INSERT INTO joined_events(user_id, event_id, user_attendance) VALUES
(1, 1, TRUE),
(2, 1, FALSE),
(5, 2, TRUE),
(9, 2, FALSE),
(4, 2, FALSE),
(2, 3, TRUE),
(10, 3, FALSE),
(12, 3, FALSE),
(3, 4, TRUE),
(8, 4, FALSE),
(1, 4, FALSE),
(4, 5, TRUE),
(2, 5, FALSE),
(3, 5, FALSE),
(5, 6, TRUE),
(8, 6, FALSE),
(6, 6, FALSE),
(2, 7, TRUE),
(5, 8, TRUE),
(3, 9, TRUE),
(10, 9, FALSE),
(9, 9, FALSE),
(7, 10, TRUE),
(5, 11, TRUE),
(3, 13, TRUE),
(7, 14, TRUE),
(1, 14, FALSE),
(13, 14, FALSE),
(1, 15, TRUE),
(1, 16, TRUE),
(5, 17, TRUE),
(3, 18, TRUE),
(3, 19, TRUE),
(8, 20, TRUE),
(12, 20, FALSE),
(13, 19, FALSE),
(2, 17, FALSE);

INSERT INTO comments(user_id, event_id, name, message) VALUES
(5, 3, 'J-Wings', 'I love this event so much!'),
(1, 1, 'Alice', 'Great event'),
(6, 4, 'Boris', 'What time we meeting?'),
(3, 7, 'Mike', 'I love this place!'),
(3, 3, 'Michael', 'Where can I park?'),
(8, 5, 'Jennifer Aniston', 'Awesome guys!'),
(2, 4, 'Bo', 'see you soon Katie');