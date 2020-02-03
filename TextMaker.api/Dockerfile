FROM mcr.microsoft.com/dotnet/core/aspnet:3.0-buster-slim as runtime
WORKDIR /app
EXPOSE 80

COPY bin/release/netcoreapp3.0/publish ./
ENTRYPOINT ["dotnet", "TextMaker.dll"]