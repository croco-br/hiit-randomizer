FROM mcr.microsoft.com/dotnet/core/sdk:3.1 as build-env
WORKDIR /app
EXPOSE 80

COPY /HiitRandomizer.Web/*.csproj ./HiitRandomizer.Web/
COPY /HiitRandomizer.Tests/*.csproj  ./HiitRandomizer.Tests/
COPY /HiitRandomizer.Domain/*.csproj  ./HiitRandomizer.Domain/
COPY /HiitRandomizer.Data/*.csproj  ./HiitRandomizer.Data/
COPY HiitRandomizer.sln ./
#RUN dotnet restore ./HiitRandomizer.sln

COPY . ./
RUN dotnet publish -c Release -o out
CMD ASPNETCORE_URLS=http://*:$PORT dotnet out/HiitRandomizer.Web.dll