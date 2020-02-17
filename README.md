# TextMaker

## Development server
Run `dotnet run .\TextMaker.api\`.

Run `cd ./TextMaker.app/`.
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Docker Compose
Before you run a docker compose, you will need a certificate and key.  The compose file expects a `textmaker.crt` and `textmaker.key` file in the `data/certs` directory.

Run `dotnet publish -c release`.
Run `cd ./TextMaker.app/`.
Run `ng build`.
Run `cd ..`.
Run `docker-compose up --build`. Navigate to `http://localhost:5051/`.
