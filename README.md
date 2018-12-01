# DoIT B1G UI <br />

This project is an  WebApp version for the DoIt B1G training services. This app allows students to sign-up for classes in an intuitive and easy-to-understand manner and enables students to better track 

##Getting Started 

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Installing

1.  Make sure that you have Node v8 or above installed.
2.  Clone this repo using `git clone git@gitlab.com:cs506-doit-sts/doitbig-ui.git`
3.  Move to the appropriate directory: `cd doitbig-ui`.<br />
4.  Run `npm install` in order to install dependencies and clean the git repo.<br />
5.  At this point you can run `npm start` to see the app at `http://localhost:3000`


## Backend Interaction 

What things you need to install the software and how to install them 

MacOS:

1. Install Homebrew by running:
    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

2. Install Go at the link below:
    https://golang.org/dl/

3. After you have Homebrew installed, you can easily install Buffalo"
    brew install gobuffalo/tap/buffalo
    Make sure you have all the dependencies installed:
    - A working Go environment 
    - A configured $PATH environment variable that includes $GOPATH/bin
    - Go version 1.9.7 or greater

4. After you have HomeBrew installed, you can easily install Buffalo:
    brew install gobuffalo/tap/buffalo

Windows:

1. Install Go at the link below:
    https://golang.org/dl/

2. Install Scoop by running the command:
    scoop install curl

3. Buffalo can be installed using the Scoop package manager:
    PS C:\> scoop install buffalo

- After the above steps, to achieve the front-end and back-end interaction, run the following command in terminal:
    sudo buffalo dev
- The pages that are connected to the backend are the HomePage, Course page, Profile, Track and Login page;
- Once you have both the frontend and backend running at the same time, through the navigating to http://localhost:3000/signin, you can sign in through a login process with a given user email: japple@wisc.edu and password: 123456

## Routes

Currently we have the following pages active:
- http://localhost:3000/
- http://localhost:3000/profile
- http://localhost:3000/login
- http://localhost:3000/signup
- http://localhost:3000/tracks
- http://localhost:3000/courses
- http://localhost:3000/course
- http://localhost:3000/update

## Testing

To run the automated Jest tests simply run: 

    $ npm test

## Authors (Front-End)

-  Alexandra Maas
-  Alexander Loftus
-  Jeff Ma
-  Luqianyi Ye
-  Yuran Liu

## License

This project is licensed under the MIT license, Copyright (c) 2018 DoIT Big. For more information see `LICENSE.md`