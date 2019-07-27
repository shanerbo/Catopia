# CMPT470 Final Project: Cat social media
The website is a community for cat owners and lovers. Users can share their cats’ photos and browse other people’s. Cat owners can interact with other cat owners and maybe find friends through their lovely pets. Not cat owners can get strong doses of cute cat photos and maybe find a cat to adopt. If time permits, we can implement an e-commerce sub-site selling cat supplies for some revenue.
### How to run it:
cd into server or client folder, then run:
``` npm run start_all ```
## Main features:
- Cat profile pages showing adoption status and photos
- Twitter/Instagram-like photo/activities posting
- Follower and following system between users 
- Search engine for cats open for adoption
> (bonus features)
- Cat supplies store
- Real-time chat
## Technologies proposed:
- Back-end
  - ExpressJS/NodeJS
  - PostgreSQL with Sequelize
  - AWS
- Front-end
  - Angular
  - Bootstrap
## Pages:
- Home page showing all news/photo feeds (and ads?..)
- Cat profile page
- Owner profile page
- Search page
- Search result page
- Store page
## First iteration:
- Set up project
- Design db schema
- Home page showing all pictures posted
- Owner profile page showing the cats they own
- Enable photo posting
## Second iteration:
- Cat profile pages showing all the photos related to them and the owner of them
- Follower and following system: user now only sees the pictures of their following cats and owners
- Filter panel on the home page that limits cats to certain breed/fur color/age/gender etc. 
- Search cats or owners by keyword
## Third iteration: (if we have time)
- Cat supplies store – e-commerce
- Real-time chat for owners
- Polishing