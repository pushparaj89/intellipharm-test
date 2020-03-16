# Test Project Intellipharm

## Development environment setup

###Pre Set up 

###You must stop your Mysql and Apache running locally to run with docker - i have used local ports to run docker nginx and mysql


1. Clone Test_Intellipharm repository

       git clone git@github.com:pushparaj89/intellipharm-test.git
        
       cd intellipharm-test
     
       cd intellipharm
       composer install
       sudo chmod 777 -R var/*
       
2. Start / stop the project
       cd .. (go back to "intellipharm-test")
       docker-compose up --build
       
To Stop the Docker
       docker-compose down

3. Prepare database - open new terminal - "cd intellipharm-test/"

     import database from db folder environment

       docker-compose run --rm --no-deps mysql mysql -h mysql -u test -ppassword test -e "source /docker-entrypoint-initdb.d/members.sql.backup;"

Change the mysql host inside "intellipharm/app/config/parameters.yml" by finding docker IP - this is temporary for task 
      
        docker-compose exec web ping mysql
        
4. Open file from #"intellipharm/app/config/parameters.yml" - change database setting

        database_host: 172.17.0.2 //this ip you can get from step 3 command
        database_port: 3306
        database_driver: pdo_mysql
        database_name: test
        database_user: test
        database_password: password
        unix_socket: /tmp/mysql.sock
         
5. Access the localhost from local to test the data 

        http://localhost
        http://localhost/?firstname=Verney&surname=Entres
        
6. Open new terminal tab and go to "intellipharm-frontend" and run below command

        npm install
        npm start
        
7. To see the result on react application
         
         http://localhost:3000/
        
            