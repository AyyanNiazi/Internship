import * as firebase  from 'firebase'



var config = {
  apiKey: "AIzaSyB7HYKCSZ_wSK6fUAUKzb2aEukUWBpmZ38",
  authDomain: "bootcamp-1-8f2cb.firebaseapp.com",
  databaseURL: "https://bootcamp-1-8f2cb.firebaseio.com",
  projectId: "bootcamp-1-8f2cb",
  storageBucket: "bootcamp-1-8f2cb.appspot.com",
  messagingSenderId: "1015263047725"
};

  var fireApp = firebase.initializeApp(config);
  var database = firebase.database();
  var storage = firebase.storage();
  var auth = firebase.auth();
  
console.log('fb')


  export {
      auth,
      fireApp,
      database,
      storage,
  }