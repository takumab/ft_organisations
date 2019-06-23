## FT Organisations

A simple CRUD API that allows you to create, read, update and delete organisations. Organisations have three
properties in which you can update. Name (type String, required: true), year (type Number), and revenue (type Number).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

1. `git clone git@github.com:takumab/ft_organisations.git`
2. `cd ft_organisations`

### Prerequisites

What things you need to install the software and how to install them

- [node](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/what-is-mongodb)
- [Postman](https://www.getpostman.com/) API development environment (optional but nice to have)

Check that you have node, npm, and mongodb installed by running the following commands

```
node -v
```

```
npm -v
```

```
mongo --version
```

If you receive a `command not found` message for any of those commands please visit to the links above and download those tools.

### Create database

After installing MongoDB you should be able to go into mongo shell by running:

```
mongo
```

Once in the mongo shell create the database by running:

```
> use name-of-db
```

Then you can add the db uri to config/dev.env file

```
MONGODB_URI=name-of-db
```

Repeat above for test db as well, but add 'test' to end of db name (`name-of-db-test`) and add to `MONGO_URI=` config/test.env file

### Installing

Run the following command to get the packages needed for the app

```
npm install
```

Copy over .env.example to /config/dev.env and /config/test.env

```
cp .env.example /config/dev.env
```

```
cp .env.example /config/test.env
```

## Running the tests

Ensure you have [jest](https://jestjs.io/docs/en/getting-started) installed

And to run the tests run:

```
npm test
```

## Built With

- [Express](https://expressjs.com//) - The web framework used
- [Mongoose](https://mongoosejs.com/) - ODM

## Contributing

1. `git clone git@github.com:takumab/ft_organisations.git`
2. `cd ft_organisations`
3. `npm install && npm run dev`
4. `npm run test`
5. Make changes
6. Create a Pull Request

## Authors

- **Tacuma Bellford**

See also the list of [contributors](https://github.com/takumab/ft_organisations/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
