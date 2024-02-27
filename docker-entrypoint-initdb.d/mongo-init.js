db = db.getSiblingDB("mta-gtfs");
db.createCollection('mta-gtfs');
db.createUser({
  user: 'myusername',
  pwd: 'mypassword',
  roles: [
    {
      role: 'dbOwner',
      db: 'mta-gtfs',
    },
  ],
});
  
