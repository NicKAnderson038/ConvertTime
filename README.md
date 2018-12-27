# ConvertTime


### Testing api without postman

1. Replace `PASTE_IN_API_URL` with url in email
2. Replace `PASTE_IN_API_KEY` with api-key in email
3. Drop into chrome web-browser and click enter.
4. Replace time value `PM` with `AM` to confirm the formatter is working correctly. 

```js
fetch('PASTE_IN_API_URL', {
    method: "POST",
    headers: {
        "x-api-key": "PASTE_IN_API_KEY",
        "Content-Type": "application/json"
    },
    body: JSON.stringify({"time": "03:15:45PM"})
  })
  .then(res=>res.json())
  .then(data=>console.log(data))
  .catch(err=>console.error(err))
```