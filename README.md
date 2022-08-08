# Diggr - Die Baumaschienenvermittlung


## Project Setup:
    - Clone this Repository
    - Open the project in VS Code
    - Have yarn installed. If not run: "npm install -g yarn"
    - Open a Terminal and run the command "yarn install"
    - create a .env file at the project root
    - Have MySQL installed
    - Optional: Install MySQL Workbench for easy DB Browsing
    - Add the following entries to your .env file:

        - TYPEORM_HOST=localhost (for development)
        - TYPEORM_USERNAME=probably root
        - TYPEORM_PASSWORD=[Your MySQL Password]
        - TYPEORM_DATABASE=[Name of the DB]
        - TYPEORM_PORT=[Your MySQL Port]
        - TYPEORM_SYNCHRONIZE=true
        - TYPEORM_LOGGING=true