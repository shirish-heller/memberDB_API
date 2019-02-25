# Hosted memberDB_API
API endpoint for member db https://memberdbapi.firebaseapp.com/getMembers-cached?lastIndex=0


# Instructions

LOCAL SETUP
  run this command on command line:- npm run build
  This will run the build and start the dev server for you
  Then you can goto http://localhost:5500/api/v1/getMembers?lastIndex=0 to test the API

  pageSize =5;
  lastIndex = index from which you want the next <pageSize> no of records

  lastIndex = 0 means you will get records 1 to 5

USING HOSTED SERVICE
  CDN cached API for maximim performance
    https://memberdbapi.firebaseapp.com/getMembers-cached?lastIndex=0
  cached resource time=10 min
  
  API without any CDN cache
    https://memberdbapi.firebaseapp.com/getMembers?lastIndex=0
  
  
