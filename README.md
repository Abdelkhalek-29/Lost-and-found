# **Lost-and-found**

An innovative web and mobile platform designed to assist in locating missing children and individuals with Alzheimer's. This project leverages facial recognition technology, cloud-based infrastructure, and a user-friendly interface to provide a reliable solution for reconnecting loved ones.


![Project Logo](https://res.cloudinary.com/dtykqby6b/image/upload/v1733098994/LostAndFound/pg4otd6zrgrq4au4ieut.jpg)



---

## **Table of Contents**

1. [Overview](#overview)  
2. [Features](#features)  
3. [Technologies Used](#technologies-used)  
4. [Installation and Setup](#installation-and-setup)  
5. [Usage](#usage)  
6. [Facial Recognition Workflow](#facial-recognition-workflow)  
7. [Contributing](#contributing)  
8. [License](#license)  
9. [Contact](#contact)  

---

## **Overview**

The **Lost and Found Application** aims to create a safer community by enabling families and authorities to:

- Post missing person reports.  
- Match missing person data using advanced facial recognition.  
- Notify relevant users upon successful matches.  
- Ensure legal compliance by involving law enforcement and care facilities in unresolved cases.  

This platform brings together cutting-edge AI technologies, seamless cloud integration, and a secure interface to streamline the process of finding missing individuals.

---

## **Features**

### **User-Friendly Interface**  
- Post missing or found reports with details and images.  
- Search for lost individuals using comprehensive filters.  

### **Facial Recognition**  
- Detect faces using **MTCNN**.  
- Extract facial embeddings with **InceptionResnetV1**.  
- Compare faces using Euclidean distance for matching.  

### **AI-Generated Images**  
- Use **StyleGAN** to simulate potential appearances of a missing individual.  

### **Cloud Integration**  
- Securely store images and data using **Cloudinary** and **Microsoft Azure**.  

### **Notifications**  
- Notify families about potential matches instantly.  

### **Legal Compliance**  
- Integrate with law enforcement for verification.  
- Transfer unresolved cases to care facilities (orphanages/retirement homes).  

---

## **Technologies Used**

### **Frontend**  
- **React.js**: For building a dynamic and responsive user interface.  

### **Backend**  
- **Node.js**: Server-side programming.  
- **MongoDB**: Database for storing user and post data.  
- **Cloudinary**: Image upload and management.  
- **Microsoft Azure** and **Google Cloud Platform (GCP)**: Hosting AI models and managing scalability.  

### **AI/ML**  
- **MTCNN**: Face detection.  
- **InceptionResnetV1**: Feature embedding extraction.  
- **StyleGAN**: Generating potential appearances.  

---

## **Installation and Setup**

### **Prerequisites**  
- **Node.js**: [Download and Install](https://nodejs.org/)  
- **MongoDB**: [Download and Install](https://www.mongodb.com/)  
- **Git**: [Download and Install](https://git-scm.com/)  

### **Steps**  

1. Clone the repository:  
   ```bash
   git clone https://github.com/Abdelkhalek-29/Lost-and-found.git
2. Navigate to the project folder:  
   ```bash
   cd Lost-and-found
3. Install dependencies for both frontend and backend:
   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
4. Create a .env file in the backend folder with the following variables:  
   ```bash
    PORT=5000
    MONGO_URI=your-mongodb-uri
    CLOUDINARY_NAME=your-cloudinary-name
    CLOUDINARY_API_KEY=your-cloudinary-api-key
    CLOUDINARY_API_SECRET=your-cloudinary-secre
5. Start the application:  
   - **Frontend**:  
     ```bash
     cd frontend
     npm start
     ```
   - **Backend**:  
     ```bash
     cd backend
     npm start
     ```
---

## **Usage**


### **Report Missing/Found Person**  
- Fill out the required details and upload an image.  

### **Match Results**  
- Receive a notification if a match is found.  

### **Authorities Integration**  
- Confirm matches with law enforcement or direct unresolved cases to care facilities.  

---

## **Facial Recognition Workflow**

### **Face Detection**  
- Use **MTCNN** to detect faces and extract bounding boxes.  

### **Feature Extraction**  
- Apply **InceptionResnetV1** to generate high-dimensional embeddings.  

### **Face Comparison**  
- Compare embeddings using **Euclidean Distance**.  
- If the distance is below a defined threshold, classify as a match.  

### **AI-Generated Images**  
- Generate likely appearances using **StyleGAN** to improve search accuracy.  

---

## **Contributing**

We welcome contributions! Please follow these steps:  

1. Fork the repository.  
2. Create a new branch:  
   ```bash
   git checkout -b feature-name
2. Create a new branch:  
   ```bash
   git checkout -b feature-name
3. Commit changes:  
   ```bash
   git commit -m "Add feature"
4. Push to the branch:  
   ```bash
   git push origin feature-name
5. Create a pull request.
---

## **License**

This project is a graduation project developed by students of the Computer Science Department at El Shrouck Academy. It is intended for educational and research purposes.  

For any inquiries or permissions beyond the scope of this license, please contact the team directly.
---

## **Contact**

For inquiries, feedback, or support:

- Email: graduation184@gmail.com  
- GitHub: [Abdelkhalek-29](https://github.com/Abdelkhalek-29)  
- GitHub: [abdelrahmansamy123](https://github.com/abdelrahmansamy123)  
- GitHub: [Abdalrhman-Ahmed](https://github.com/Abdalrhman-Ahmed)  
