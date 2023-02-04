# [Melon Reservation Scheduler](https://melon-reservations.herokuapp.com/)

This project allows you to make and manage melon tasting reservations. 🍉

[Project Requirements](https://docs.google.com/document/d/1g5WMLwezVuGCNnZBafREobcDDst8PgxElGPHfk7EgRI/edit)

## Prerequisites

The following pieces of software are necessary before installing project
dependencies and running the application. If you already have these
installed, [you can skip to the Setup section](#setup)

### Homebrew

```shell
/usr/bin/ruby -e "\$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Python3

```shell
brew install python3
```

Node

```shell
brew install node
```

Yarn

```shell
npm install --global yarn
```

## Setup

### Javascript

Run `yarn install` to install Javascript dependencies.

### Python

The first time you run this project, create a Python virtual environment
using `python3 -m venv env`.

Each time you want to run the server, activate the virtual environment
with `source env/bin/activate`. Then install dependencies using
`pip3 install requirements.txt`.

## Local development

### One Time Only Setup

1. Create the database (this assumes you have Postgres installed and running). You can name the database
   anything but you need to refer to the correct name in the next step.

   ```
   createdb reservations
   ```

2. Create a secrets file to export the environment variables needed for the application.

   You can set APP_SECRET_KEY to any string.

   DATABASE_URL should refer to the location of the database you created in the previous step.

   ENV should be set to development.

   ```
   echo "export APP_SECRET_KEY='some_secret'\nexport DATABASE_URL='postgres:///reservations'\nexport ENV='development'" > secrets.sh
   ```

3. Seed the database (optional)

   ```
   python3 seed.py
   ```

### Running the servers (do this each time you are running the application)

In separate terminal tabs, run:

```shell
yarn js-start
yarn py-start
```

Open [http://localhost:3000](http://localhost:3000) to view the application in the browser.

The page will reload if you make edits.

You will also see any lint errors in the console.

## Available Scripts

In the project directory, you can run:

### `yarn js-start`

Runs the frontend in development mode.

### `yarn py-start`

Runs the Python server. Make sure you follow the setup instructions
to install the backend dependencies before running this.

### `yarn build`

Builds the app for production to the `build` folder. It bundles React in production mode
and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed!
