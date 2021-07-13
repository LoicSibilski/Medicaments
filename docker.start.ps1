docker-compose  -f ./docker-compose/docker-compose.mongo.yml
                -f ./docker-compose/docker-compose.elastic.yml
                -f ./docker-compose/docker-compose.supervision.yml
                -f ./docker-compose/docker-compose.yml
                -f ./docker-compose/docker-compose.gateway up