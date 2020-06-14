/* groovylint-disable UnnecessaryCatchBlock */
node {
  stage('Checkout') {
    checkout scm
  }
  stage('Environment') {
    sh 'git --version'
    echo "Branch: ${env.BRANCH_NAME}"
    sh 'docker -v'
    sh 'printenv'
  }
  stage('Build') {
    if (env.BRANCH_NAME == 'master') {
      sh 'docker build -t yudus-dev-website --no-cache .'
      sh 'docker tag yudus-dev-website duyyudus/yudus-dev-website'
    }
  }
  stage('Publish Docker') {
    withCredentials([usernamePassword(credentialsId: 'docker-hub-id', passwordVariable: 'DOCKER_REGISTRY_PWD', usernameVariable: 'DOCKER_REGISTRY_USER')]) {
      sh 'docker login -u ${DOCKER_REGISTRY_USER} -p ${DOCKER_REGISTRY_PWD}'
      sh 'docker push duyyudus/yudus-dev-website'
      sh 'docker rmi -f yudus-dev-website duyyudus/yudus-dev-website'
    }
  }
}
