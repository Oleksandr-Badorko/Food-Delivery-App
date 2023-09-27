##  in first terminal start mongoDb locally by
```
sudo docker run -p 27017:27017 --name mongo-test mongo:4.4
```


## in second terminal navigate to directory /api/

## install modules
``
npm i
``

## start app
``
npm start
``


## check if works
``
curl --location 'http://localhost:3000/api/v1/get-items'
``