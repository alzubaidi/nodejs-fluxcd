# FluxCD Nodejs Example
## Setup:
- Fork this repo
- Spin [minikube](https://minikube.sigs.k8s.io/docs/start/) cluster
- Create namespace called "demo"
  - `kubectl create namespace demo`
- Setup [fluxcd](https://fluxcd.io/flux/get-started) on your local cluster.
    - In my case it was:
      ```
      export GHUSER="alzubaidi" # replace with your github username
      fluxctl install \
      --git-user=${GHUSER} \
      --git-email=${GHUSER}@users.noreply.github.com \
      --git-url=git@github.com:${GHUSER}/nodejs-fluxcd \
      --git-path=namespaces,workloads \
      --namespace=flux | kubectl apply -f -
- Forward requests from the kubernetes service to host
  - `kubectl port-forward -n demo svc/hello 3000:3000`
- On a web-browser, open http://localhost:3000/
