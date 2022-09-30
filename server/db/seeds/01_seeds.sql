-- Users table seeds here (Example)
INSERT INTO users (name, picture) VALUES 
('Alice', 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'),
('bo', 'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png'),
('mike', 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80'),
('jean', 'https://i.pinimg.com/736x/17/57/1c/17571cdf635b8156272109eaa9cb5900.jpg'),
('J-wings', 'https://brandyourself.com/blog/wp-content/uploads/linkedin-profile-picture-too-close.png'),
('Vladimir', 'https://ih1.redbubble.net/image.825519379.2200/aps,504x498,medium,transparent-pad,600x600,f8f8f8.jpg'),
('Justin', 'https://pfpmaker.com/_nuxt/img/profile-3-1.3e702c5.png'),
('Jennifer Aniston', 'https://www.seekpng.com/png/detail/506-5061704_cool-profile-avatar-picture-cool-picture-for-profile.png'),
('Chanel', 'https://i2-prod.walesonline.co.uk/news/uk-news/article23927263.ece/ALTERNATES/s1200c/0_F038F02A-D11F-11EC-A042-0A2111BCB09D.jpg'),
('Queen McbElith', 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/08/21/16611032033049.jpg');

INSERT INTO categories (name) VALUES
('Food & Dining'),
('Games & Recreation'),
('Fitness'),
('Outdoors'),
('Alcohol & Beverages'),
('Movies & Theatre'),
('Live Music'),
('Chatting, Philosophy'),
('Water Sports'),
('Health & Wellness');


INSERT INTO events (name, image, description, size_limit, owner_id, category, lat, lng, start_time, end_time) VALUES
('Coffee Chat', 'https://images.squarespace-cdn.com/content/v1/5b97eba69f8770a3639818de/1601497107704-YWY5VZU9Q5IHAPQZ983M/image-asset.jpeg', 'Join me for a lovely chat over a nice cup of coffee. Invites welcome!', 3, 1, 1, 51.0233064354121, -114.02369425973428, '2022-10-13 05:00:00', '2022-10-13 16:00:00'),

('Movie Night', 'https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Top_Gun_Maverick_Poster.jpg/220px-Top_Gun_Maverick_Poster.jpg', 'I am looking for someone to watch Top Gun with! All my friensd have already watched it already', 3, 5, 6, 49.282126, -123.124361, '2022-10-13 18:00:00', '2022-10-13 21:00:00'),

('Board Games', 'https://i.cbc.ca/1.2716999.1406221490!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/135000779-board-games.jpg', 'Come join me for some fun board games this could include battleship, monopoly, and risk!', 8, 2, 2,49.25825320517397, -123.04434376344798, '2022-09-28 12:00:00', '2022-09-28 11:00:00'),

('Tennis', 'https://imageio.forbes.com/specials-images/imageserve//6297a140ad5629573ba5f667/0x0.jpg?format=jpg&width=1200', 'Come play some tennis with me im super good though ill probably mess you up!', 4, 3, 4, 49.15964422830105, -123.13337467011768, '2022-10-13 16:00:00', '2022-10-13 18:00:00'),

('Early Morning Hiking', 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGlraW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80', 'come for a nice hike with me but we have to get up at 3am to see sunrise on top of mountain', 10, 4, 5, 49.37341791072464, -123.09637524954998, '2022-09-29 18:00:00', '2022-09-29 20:00:00'),

('Lets talk Shakespeare', 'https://calhum.org/wp-content/uploads/2017/07/AP_Blog_Enewsjpg.jpg', 'Come discuss classic literature with me and some friends', 5, 5, 6, 49.28053130736995, -123.11693171231532, '2022-09-20 13:00:00', '2022-09-20 14:00:00'),

('Dinner Party', 'https://cdn77-s3.lazycatkitchen.com/wp-content/uploads/2020/09/basil-tofu-steak-dinner-close-up-1024x1536.jpg', 'Come enjoy a nice porkchop entree with a side potatoes and green beans tossed in a cabernet reduction', 6, 1, 1, 49.276189979572884, -123.12153898959998, '2022-09-30 15:00:00', '2022-09-30 17:00:00'),

('Lets talk Shakespeare #2', 'https://calhum.org/wp-content/uploads/2017/07/AP_Blog_Enewsjpg.jpg', 'Come discuss classic literature with me and some friends', 6, 5, 6, 49.28053130736995, -123.11693171231532, '2022-10-13 13:00:00', '2022-10-13  14:00:00'),

('Seafood Restaurant', 'https://lh5.googleusercontent.com/p/AF1QipO05bf-v-UnqlrcwtSN85qOHwKr36gBKFQvf4ox=w408-h272-k-no', 'All my friends are allergic to shellfish. Looking forward to eating some delicious oysters', 6, 3, 1, 49.27087406969367, -123.1365432973447, '2022-10-13 17:00:00', '2022-10-13 20:00:00'),

('Ouiji Board Night', 'https://cdn.britannica.com/79/159579-050-12877F0B/Ouija-board.jpg', 'Join and reveal what the Ouiji board has to say to you!', 3, 1, 1, 51.0233064354121, -114.02369425973428, '2022-10-13 05:00:00', '2022-10-13 16:00:00'),

('Chess Club', 'https://c4.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_695,g_auto,q_auto,dpr_2.6,f_auto,h_460/gxknjgscx8ci7ayvxxve', 'Come play Chess with us! Free admission', 3, 5, 6, 49.282126, -123.124361, '2022-10-13 18:00:00', '2022-10-13 21:00:00'),

('Learn Ballet', 'https://cf.ltkcdn.net/dance/images/orig/228623-1600x1065-ballet-dancer-practicing.jpg', 'Learn how to prance in the most eloquent way with tonights free lesson', 8, 2, 2,49.25825320517397, -123.04434376344798, '2022-09-28 12:00:00', '2022-09-28 11:00:00'),

('Axe Throwing', 'https://pbs.twimg.com/media/DedVcGiU0AAcu2i.jpg', 'Come throw Axes at Axe & Grind. Rip and Tear!', 4, 3, 4, 49.15964422830105, -123.13337467011768, '2022-10-13 16:00:00', '2022-10-13 18:00:00'),

('Hackathon #26!', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.-88rbxQR_gTJMvLBbUkfDgHaEK%26pid%3DApi&f=1&ipt=88849c2e5f24aee6413de3a7fc4d629a547e4679ba65bfa9c9e2aa0a55861f7c&ipo=images', 'Bring your laptop, and be ready to code for 12 hours while we all build something cool together!', 10, 4, 5, 49.37341791072464, -123.09637524954998, '2022-09-29 18:00:00', '2022-09-29 20:00:00'),

('BattleSnake', 'https://calhum.org/wp-content/uploads/2017/07/AP_Blog_Enewsjpg.jpg', 'Bring your Pet Snakes into the ring and let them duke it out! Best of 5 wins', 5, 5, 6, 49.28053130736995, -123.11693171231532, '2022-09-20 13:00:00', '2022-09-20 14:00:00'),

('Bar Hopping', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Hbe9Fea2NL9MJuyc7ShRkAHaE7%26pid%3DApi&f=1&ipt=ef2cff58b29b6a6eae0ae0c2e1d128db41b3ca8af05816d1d5a301ba28a50fa3&ipo=images', 'Lets start at this bar, and start tomorrow with a hangover! ', 6, 1, 1, 49.276189979572884, -123.12153898959998, '2022-09-30 15:00:00', '2022-09-30 17:00:00'),

('Bare Hand Meditation', 'https://images.everydayhealth.com/images/emotional-health/meditation/a-complete-guide-to-meditation-722x406.jpg?w=1110', 'Lets stare at the sun to charge our third eye chakras while inhaling burning sage fumes. Relaxing and wholstic!', 6, 5, 10, 49.28053130736995, -123.11693171231532, '2022-10-13 13:00:00', '2022-10-13  14:00:00'),

('Live Grass Drawing', 'https://en.canson.com/sites/default/files/styles/large/public/medias-images/New-Dessin-001-2%20%281%29.jpg?itok=i1oaN4tC', 'Bored of being boring? Come outside where we focus on drawing blades of grass. All experience levels welcome!', 6, 3, 1, 49.27087406969367, -123.1365432973447, '2022-10-13 17:00:00', '2022-10-13 20:00:00');

INSERT INTO joined_events(user_id, event_id, user_attendance) VALUES
(1, 1, TRUE),
(2, 1, TRUE),
(5, 1, TRUE),
(3, 2, TRUE),
(1, 6, TRUE),
(2, 6, TRUE),
(2, 3, TRUE),
(4, 4, TRUE),
(2, 6, TRUE),
(3, 4, TRUE),
(5, 2, TRUE),
(5, 6, TRUE),
(3, 3, TRUE),
(4, 3, TRUE),
(2, 9, TRUE);