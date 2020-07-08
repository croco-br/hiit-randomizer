FROM mcr.microsoft.com/dotnet/core/sdk:3.1 as build-env
WORKDIR /app
EXPOSE 80

COPY *.csproj ./
RUN dotnet restore

COPY . ./
RUN dotnet publish -c Release -o out
CMD ASPNETCORE_URLS=http://*:$PORT dotnet out/hiit-randomizer.dll