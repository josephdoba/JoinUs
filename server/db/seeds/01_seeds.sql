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

INSERT INTO events (name, image, description, size_limit, owner_id, category, latitude, longitude, start_time, end_time) VALUES
('Coffee Chat', 'https://images.squarespace-cdn.com/content/v1/5b97eba69f8770a3639818de/1601497107704-YWY5VZU9Q5IHAPQZ983M/image-asset.jpeg', 'Join me for a lovely chat over a nice cup of coffee. Invites welcome!', 3, 1, 'Food & Dining', 51.0233064354121, -114.02369425973428, '2022-09-28 05:00:00', '2022-09-28 16:00:00'),
('Board Games', 'https://i.cbc.ca/1.2716999.1406221490!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/135000779-board-games.jpg', 'Come join me for some fun board games this could include battleship, monopoly, and risk!', 8, 2, 'Board Games & Recreation',49.25825320517397, -123.04434376344798, '2022-09-28 12:00:00', '2022-09-28 11:00:00'),
('Tennis', 'https://imageio.forbes.com/specials-images/imageserve//6297a140ad5629573ba5f667/0x0.jpg?format=jpg&width=1200', 'Come play some tennis with me im super good though ill probably mess you up!', 4, 3, 'Fitness', 49.15964422830105, -123.13337467011768, '2022-09-29 16:00:00', '2022-09-29 18:00:00'),
('Early Morning Hiking', 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGlraW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80', 'come for a nice hike with me but we have to get up at 3am to see sunrise on top of mountain', 10, 4, 'Fitness', 49.37341791072464, -123.09637524954998, '2022-09-29 18:00:00', '2022-09-29 20:00:00'),
('Lets talk Shakespeare', 'https://calhum.org/wp-content/uploads/2017/07/AP_Blog_Enewsjpg.jpg', 'Come discuss classic literature with me and some friends', 5, 5, 'Books & Literature', 49.28053130736995, -123.11693171231532, '2022-09-30 13:00:00', '2022-09-30 14:00:00'),
('Dinner Party', 'https://cdn77-s3.lazycatkitchen.com/wp-content/uploads/2020/09/basil-tofu-steak-dinner-close-up-1024x1536.jpg', 'Come enjoy a nice porkchop entree with a side potatoes and green beans tossed in a cabernet reduction', 6, 6, 'Food & Dining', 49.276189979572884, -123.12153898959998, '2022-09-30 15:00:00', '2022-09-30 17:00:00');

INSERT INTO joined_events(user_id, event_id, user_attendance) VALUES
(1, 1, TRUE),
(2, 1, TRUE),
(3, 2, TRUE),
(4, 4, TRUE);