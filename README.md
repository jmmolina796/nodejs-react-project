# React and Node.js Web Application

## Installation Instructions

In order to execute the application in this repository, you have to follow the next instructions:

1. You can use whatever operating system you are comfortable with. Nevertheless, I recommend you to use Linux or macOS.
2. Install [Node.js](https://nodejs.org/en/), [Git](https://git-scm.com/downloads) and [MySQL](https://dev.mysql.com/downloads/mysql/). If you already have installed one of these ones, you could skip steps 2 and 3.
3. Once you have installed them, do not forget to verify whether you did it appropriately or not. Open your terminal and perform the following steps. 
    - Execute: `npm --v`. It has to appear the current version you have installed.
    - Run: `node --v`. It has to appear the current version you have installed.
    - Call: `git --version`. It has to appear the current version you have installed.
    - Follow [these instructions](https://dev.mysql.com/doc/mysql-getting-started/en/#mysql-getting-started-installing) so that you could configure MySQL. If you already have MySQL configured correctly, you could skip this step.
4. Now, you have to clone this repository. Open your terminal and place it in the location where you want to clone this repository (it could be Desktop, Documents, etcetera). Then, run `git clone https://github.com/jmmolina796/nodejs-react-project`.
5. After that, run these commands in order to install the client dependecies:
    - `cd ./nodejs-react-project/client`
    - `npm i`
6. Later, execute these instructions to install the server dependecies
    - `cd ..`
    - `cd ./server`
    - `npm i`  
7. Finally, we have to check if the application runs accurately. Execute these commands:
    - `cd ..`
    - `cd ./client`
    - `npm start`
    
    It has to open your default browser and display a website with the phrase **Hello World**.


    ## Slides and tutorials

    You can get the slides from this link: [Slides](https://slides.com/jmmolina796/react-node)

    The suggested tutorials are in the slides.