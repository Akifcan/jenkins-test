//Jenkins file only to tutorial example
pipeline {
  agent any
    
  tools {nodejs "nodejs"}
    
  stages {
        
    stage('Cloning Git') {
      steps {
         git branch: 'main', 'https://github.com/Akifcan/jenkins-test'
      }
    }
        
    stage('Install dependencies') {
      steps {
        bat 'npm install'
      }
    }
     
    stage('Run') {
      steps {
         bat 'npm run start'
      }
    }
    
    stage('CURL') {
      steps {
        bat 'curl --version'
      }
    }
    
  }
  
   post {
     success {
       echo 'Build SUCCESasasdS'
       echo 'SEND REQUEST !'
       bat 'curl -X GET https://jsonplaceholder.typicode.com/todos/1'
     }
   }
  
}
