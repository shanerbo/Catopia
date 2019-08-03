# CMPT470 Final Project: Cat social media
The website is a community for cat owners and lovers. Users can share their cats’ photos and browse other people’s. Cat owners can interact with other cat owners and maybe find friends through their lovely pets. Not cat owners can get strong doses of cute cat photos and maybe find a cat to adopt. If time permits, we can implement an e-commerce sub-site selling cat supplies for some revenue.

# Contributors
- Zhixuan(Otto) Hu 301290598
- Jiaran Yu301273664 
- Erbo Shan 301243663
- Ming Chen 301329342

### Setup
- Install Nodejs and PostgreSQL
- In /server create a `.env` file that follows the format of `.env.example`
- For image upload to work, get a google cloud storage key file and rename it as `fluffy-secret-file.json` and place it in `/server` dir. For this you need a GCP account
- Run ``` npm run build ``` in root dir

#### To run in dev mode:
cd into server folder, run:
``` npm run start_all ```
- Go to browser and open localhost:{PORT# your specified in .env or 8080}

#### vagrant setup
- Build the angular app into server by running ``` cd client&&npm run build ```
- Run vagrant up in `/server`


## Main use cases
- Not logged in user sees a list of cat photos on the home page. User can't click like or comment or use following/liked button in the left panel unless they log in
- User logs in to see a compose box. User can click the plus button to add photos. After selecting at least 1 photo they can enter a description for the photos
- User sees a recommended panel in the right of the home page. It provides follow buttons that allow user to quickly follow recommended users. User can also click the hyperlink to visit recommended users' posts.
- User can browse through other users' posts and like posts if they are logged in.
- User can use the search bar on the navbar to search for user or cats by keyword. Backend will match the keyword with usernames, bios, cat names and cat colors
- User can use the filters in the left panel to filter for specific cats, availible filters includes: gender, age and spay
- User can update their info in Edit profile page, which is hyperlinked in the navbar.

## Main features:
- Cat profile pages showing cat info and photos
- Twitter/Instagram-like photo/activities posting
- Follower and following system between users
- Search system for cats and cat owners
- Responsive site that runs well on mobile
- Inifinite scroll is implemented so that posts are not all loaded at once
- 

## Technologies proposed:
- Back-end
  - ExpressJS/NodeJS
  - PostgreSQL with Sequelize
  - GCP
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