# Blood Management System

The **Blood Management System** is a web-based application developed to manage blood donations and transfusions efficiently. It connects **admins**, **donors**, **patients**, and **doctors** to facilitate the process of blood donation and transfusion, ensuring that blood is readily available when needed. The system is built using **Spring Boot** for the back-end.

## Features

### Core Features:
- **Admin Management**: Admins can manage user roles, approve donations, and monitor blood stock levels.
- **Donor Registration**: Donors can register, schedule donations, and track their donation history.
- **Patient Requests**: Patients can request blood and track the status of their requests.
- **Doctor Role**: Doctors can manage patient requests and match them with suitable donors or blood banks.
- **Blood Bank Management**: The system keeps track of blood stocks and automates alerts when stock is low.
- **Blood Donation Scheduling**: Donors can schedule their donation dates and be notified via email or SMS.
- **Search Functionality**: Find available donors or blood types based on location and blood group.

### User Roles:
1. **Admin**: Manages users (donors, patients, doctors), blood stocks, and donation approvals.
2. **Donor**: Registers to donate blood and can view donation history.
3. **Patient**: Requests blood and checks request status.
4. **Doctor**: Approves patient requests and manages donor-patient matching.

### Non-Functional Requirements:
- **User-Friendly**: The system provides an intuitive interface to make blood donations and requests simple.
- **Scalable**: Can handle a growing number of users and blood requests.
- **Secure**: Protects sensitive medical and personal data.
- **Reliable**: Ensures the availability of blood stock information 24/7.
- **Notification System**: Sends reminders for scheduled donations and alerts for low blood stocks.

## Technology Stack

- **Front-End**: HTML, CSS, JavaScript
- **Back-End**: Java (Spring Boot)
- **Database**: MySQL
- **ORM**: Hibernate (for database interaction)
- **Security**: Spring Security for authentication and role-based access control

## System Architecture

This system is designed using **Object-Oriented Programming (OOP)** principles and is based on a layered architecture:
- **Presentation Layer**: Handles user interaction using HTML, CSS, and JavaScript.
- **Service Layer**: Business logic is implemented here, managing user requests, donations, and approvals.
- **Data Access Layer**: Interacts with the database to store and retrieve blood stocks, donations, and requests.
- **Security Layer**: Provides authentication and authorization for different user roles.

### OOP Concepts:
- **Encapsulation**: Each role (admin, donor, doctor, patient) is encapsulated into its own class with specific attributes and methods.
- **Inheritance**: Common attributes and methods are shared across user roles through base classes.
- **Polymorphism**: Different user roles (admin, donor, doctor, patient) can perform actions like managing blood requests with role-specific behaviors.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Jeyapragash1/blood-management-system.git
