
const getData = (url = 'https://api.fortnitetracker.com/v1/profile/pc/lonefreak', data = {}) => {
  return fetch(url, {
    method: "GET",
    mode: "no-cors",
    credentials: "include",
    headers: {
      "TRN-Api-Key": "582365b9-87d8-4c86-af13-a4c0caaec1b1"
    },
  })

  .then(response => response.json())
  .catch(error => console.log('Fetch Error =\n', error));
};

export {getData};
