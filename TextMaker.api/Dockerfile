FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim as runtime
WORKDIR /app
EXPOSE 80

COPY bin/Release/netcoreapp3.1/publish ./
ENTRYPOINT ["dotnet", "TextMaker.dll"]