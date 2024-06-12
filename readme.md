## CREATE NEW .NET PROJECT

### The following command creates a solution for us

```
	dotnet new sln
```

### The following command creates a web api for us Note: -n should always be followed by the name

```
	dotnet new webapi -n API
```

### Adding one or more projects to our solution

```
	dotnet sln add API/
```

### Running the project

```
	dotnet run
```

### Watching the application will ensure you do not have to rerun the application when a change happens

```
	dotnet watch
```

### If https gives problems, run the following command as an ADMIN

```
	dotnet dev-certs https --trust
```

### Packages

- You need to install Nuget Gallery on VS Code
- You need to install Dotnet-EF separately using the following command because you can't find it in Nuget Gallery

```
	dotnet tool install --global dotnet-ef --version 8.0.6
```

- If this was already installed, I would need to perform an update instead

```
	dotnet tool update --global dotnet-ef --version 8.0.6
```

### Database Migrations

```
	dotnet ef migrations add InitialCreate -o Data/Migrations
```

- if you see an error, execute dotnet build

```
	dotnet build
```

### To update the Database

```
	dotnet ef database update
```

### Dotnet EF Global Installation

```
	dotnet tool install --global dotnet-ef
```

### Generate a gitignore file

```
	dotnet new gitignore
```
