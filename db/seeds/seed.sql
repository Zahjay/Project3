\c yilp_dev


INSERT INTO location (location) VALUES 
('Bronx'),('Brooklyn'),('Manhattan'),('Queens'),('Staten_Island');


INSERT INTO pictures (link, location) VALUES
--bronx
('https://cdn0.vox-cdn.com/uploads/chorus_image/image/52594761/beonx_welcome_lead_2.0.jpeg',1),('https://www.nycgo.com/images/boroughs/7700/2bronxborostill__large.jpg',1),('https://cdn0.vox-cdn.com/uploads/chorus_image/image/53583373/4839258048_57b39b01c6_o.0.jpg',1),

-- Brooklyn

('https://cdn0.vox-cdn.com/uploads/chorus_image/image/54008287/shutterstock_270402566.0.0.0.jpg',2),('https://www.nycgo.com/images/boroughs/7696/2brooklynborostill__large.jpg',2),('https://5d48184523c8a489ed05-91a4b8ed85c04e5358f91889505a4163.ssl.cf1.rackcdn.com/6/4/large.jpg',2),

-- -- Manhattan

('http://www.avalonhotelnyc.com/application/files/6614/4442/4284/mast-columbus-circle_1.jpg',3),('https://2.bp.blogspot.com/-GhtXxJl76d4/WHIwDZ0_g5I/AAAAAAAAAnI/DECvu9Q5Yy050QZb-SgX6wznMrqd-TyAQCLcB/s1600/Central-Park-New-York-01-1600x960.jpg',3),
('https://images.clarin.com/2016/08/11/HylvWa2t4x_720x0.jpg',3),('http://be478d95e8aa404656c1-d983ce57e4c84901daded0f67d5a004f.r11.cf1.rackcdn.com/manhattan-at-times-square-hotel/media/MTS-Times-Square-5886798fc13f1.jpg',3),

-- --Queens
('http://dreamsinheels.com/wp-content/uploads/2015/09/Unisphere-Flushing-Meadows-Corona-Park-Queens-New-York.jpg',4),
('https://static01.nyt.com/images/2016/04/13/nyregion/13pepsi/13pepsi-master768.jpg',4),
('https://abandonednyc.files.wordpress.com/2013/07/untitled-001.jpg?w=750&h=500',4),

-- --Staten_Island
('https://i1.wp.com/www.citylandnyc.org/wp-content/uploads/sites/14/2011/06/SI-Armory-01-CDB-20090722.jpg',5),
('http://coloradoguy.com/staten-island-ferry/staten-island-ferry6.jpg',5),('https://upload.wikimedia.org/wikipedia/commons/1/15/Postcards_9_11_Memorial%2C_St._George_Esplanade%2C_Staten_Island%2C_NY.jpg',5);


--Inserting users

INSERT INTO users (name, email, password) VALUES 
('John Doe','JohnDoe@gmail.com','***********');

INSERT INTO users (name, email, password) VALUES
('Doggo','Doggo@gmail.com','********');

INSERT INTO users (name, email, password) VALUES 
('Dwayne "The Rock" Johson','Bigman@gmail.com','***********');

INSERT INTO users (name, email, password) VALUES 
('Batman','NotBruceWayne@gmail.com','***********');

INSERT INTO users (name, email, password) VALUES 
('Crocker','FAIRYGODPARENTS@gmail.com','***********');

INSERT INTO reviews (review, location, name) VALUES 
('It Stinks and it just sucks',1,1);

INSERT INTO reviews (review, location, name) VALUES 
('It is iight',4,1);

INSERT INTO reviews (review, location, name) VALUES 
('Good fire hydrants',3,2);

INSERT INTO reviews (review, location, name) VALUES 
('Some other dog peed everywhere so i cannot go',1,2);

INSERT INTO reviews (review, location, name) VALUES 
('Good Gyms',3,3);

INSERT INTO reviews (review, location, name) VALUES 
('Nice Gargoyles',3,4);

INSERT INTO reviews (review, location, name) VALUES 
('Decent restaraunts at decent prices',5,1);

INSERT INTO reviews (review, location, name) VALUES 
('FAIRY GOD PARENTS',1,5);

