# /Users/adi_07/Desktop/LegalAidNow/legalaidnow-backend/Dockerfile

# 1. Base Image: Use a lightweight Java runtime
FROM eclipse-temurin:17-jdk

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Copy the application's JAR file into the container
# This looks for the JAR in the 'target' folder relative to this Dockerfile
COPY target/backend-0.0.1-SNAPSHOT.jar app.jar

# 4. Expose the port your Spring Boot app listens on
EXPOSE 8080

# 5. Command to run the application when the container starts
CMD ["java", "-jar", "app.jar"]