node('amazon-vm') {

  stage("checkout"){
    checkout([$class: 'GitSCM', branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[credentialsId: 'd0ed87e1-d62d-41ce-b153-b66a6e179e25', url: 'https://github.com/mahdchek/ci-demo-front/']]])
  }

  stage ("build"){
    sh "npm install"
    sh "ng build --prod"
  }

  node('amazon-vm'){
    stage("deploy"){
      sh "sudo docker build -t ci-back ."
      try{
//        sh "sudo docker stop \$(sudo docker ps -aq)"
//        sh "sudo docker rm \$(sudo docker ps -aq)"
      }catch(e){
        println "aucun conteneur n'est lancé"
      }
      sh "sudo docker-compose -f docker-compose.yaml up -d --build"
    }
  }
}
