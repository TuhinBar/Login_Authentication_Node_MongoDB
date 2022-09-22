# Login_Authentication_Node_MongoDB



## Introduction :
- This is a simple log in authentication project with `Login in restricted for more than 2 devices for a user`. 

## Modules/Libraries used:

- I made this as an simple `Express` app.
- Used `Body Parser` to get the data from the form.
- `Mongoose` is used to store user data in `Mongo DB`.
- For templating I used `Ejs`.
- `JWT` for creating token.
- And `MD5` for hashing the password.

- To install all the modules after forking or downloading the code use the below command to download all dependancies.

 ```
 npm i express ejs mongoose body-parser md5 jsonwebtoken dotenv
 ```

## Previews :
- Home route `//localhost:3000/`.

 ![image](https://user-images.githubusercontent.com/85868593/189725180-da172ab4-66c9-40d6-b634-74d23e02f5bc.png)

- Register route `//localhost:3000//register`

 ![image](https://user-images.githubusercontent.com/85868593/189725733-398f3f67-7f19-42b4-a93b-5589183bb9cb.png)

- Registration succesfull

 ![image](https://user-images.githubusercontent.com/85868593/189726055-0ebc06eb-07c5-45e9-a280-66eff63724eb.png)


- Login route is identical with register and login successfull is identical with registration successfull.

- Login Failed 

 ![image](https://user-images.githubusercontent.com/85868593/189726505-1f65bf50-2926-4fb5-9686-c1b176659877.png)

- Login limit reached and log out warning.

 ![image](https://user-images.githubusercontent.com/85868593/189726831-ff996a2a-5aad-4a42-93ee-c22a8d809849.png)

## DB sample :

```
{
    "_id" : ObjectId("631cbbf6825f12535159a5bd"),
    "email" : "tuhinbar44@gmail.com",
    "password" : "26ed469e827f23eab439f2e91a8a4ce3",
    "__v" : NumberInt(0)
}
```

## Demo :
https://user-images.githubusercontent.com/85868593/189727188-79ea0491-b103-4679-ac5b-60ea2f5f5754.mp4


