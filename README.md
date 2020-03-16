# Test Project Intellipharm

## Development environment setup

Pre Set up 

You must stop 
1. Clone Test_Intellipharm repository

       cd test-docker
     
2. Start / stop the project

       docker-compose up 
       
To Stop the Docker
       docker-compose down

3. Prepare database

     import database from db folder environment

       docker-compose run --rm --no-deps mysql mysql -h mysql -u test -ppassword test -e "source /docker-entrypoint-initdb.d/members.sql.backup;"

Change the mysql host inside intellipharm/config/parameters.yml by finding docker IP - this is temporary for task 
      
        docker-compose exec web ping mysql
        
4. Access the localhost from local to test the data 

        http://localhost
        http://localhost/?firstname=Verney&surname=Entres
        
5. Open new terminal tab and go to intellipharm-frontend and run below command

        npm install
        npm start
        
6. To see the result on react application
         
         http://localhost:3000/
        
            