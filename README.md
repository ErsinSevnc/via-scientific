# via-scientific

## Prerequisites

All you need to have Docker installed localy on your computer. If you do not have any Docker service is installed please follow the instructions at https://www.docker.com/get-started/

## Running App Locally

To start application locally please open up your terminal and be sure that path is the root of the project. After that please copy below code and paste it to your terminal and then press enter.

```
docker compose up -d
```

You should see the containers app and running. To start using application open your web browser and type http://localhost:3000 or you can navigate by clicking.

#### Important
Please do not try to navigate from x.xyz.com or y.xyz.com, since there is no nginx configuration you wont be able to access application from that url's.