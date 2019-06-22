## FT Organisations

A simple CRUD API that allows you to create, read, update and delete organisations. Organisations have three
properties in which you can update. Name (type String, require: true), year (type Number), and revenue (type Number).
In

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

1. git clone git@github.com:takumab/ft_organisations.git
2. cd ft_organisations

### Prerequisites

What things you need to install the software and how to install them

- [node](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/what-is-mongodb)
- [Postman](https://www.getpostman.com/) API development environment

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

If you receive a `command not found` message in the termial please go to the links above.

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

- [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
- [Maven](https://maven.apache.org/) - Dependency Management
- [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

- **Tacuma Bellford** -

See also the list of [contributors](https://github.com/takumab/ft_organisations/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
