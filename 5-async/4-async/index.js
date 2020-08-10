async function fetchData(url) {
  // <-- start
  const fetchResult = await fetch(url);
  console.log(fetchResult);
  if (fetchResult.status === 200) {
    fetchResult.json().then(value => {
      document.writeln(value.name);
    });
  }
  console.error(fetchResult.error());
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(URL);
