---
title: "Inter-Client Dependency Recovery with Hidden Global Components for Federated Traffic Prediction"
venue: "AAAI"
year: 2026
authors:
  - "Hang Zhou"
  - "Wentao Yu"
  - "Yang Wei"
  - "Guangyu Li"
  - "SHA XU"
  - "Chen Gong"
summary: "A novel Federated method which recovers the inter-client dependency with HIdden global componeNTs (FedHINT)."
abstract: "Current works either fail to capture the missing inter-client dependency or compromise data privacy to recover the inter-client dependency. To address this issue, we propose a novel Federated method which recovers the inter-client dependency with HIdden global componeNTs (FedHINT). We find that the traffic data from different local regions actually contain hidden global components that reflect cross-regional traffic changes. Therefore, our FedHINT aims to extract hidden global components from each client to generate proxy nodes that represent global information, which are then utilized to recover the inter-client dependency. To be specific, we employ an attention module, which is guided by the shared global queries to capture hidden global components from local traffic data, to generate proxy nodes. Subsequently, our FedHINT adaptively learns the correlations between proxy nodes and local nodes through a global encoder. During this process, the global information in proxy nodes compensate for the loss of information from cross-regional nodes, which thereby recovers the missing inter-client dependency."
topics:
  - "Graph Federated Learning"
  - "Federated Traffic Prediction"
awards:
  - "Poster"
featured: true
links:
  pdf: "https://ojs.aaai.org/"
  # arxiv: "https://arxiv.org/abs/2412.11402"
#   project: "https://stream-gnn.ai"
#   slides: "https://example.com/slides"
  code: "https://github.com/lichuan210/FedHINT"
#   video: "https://youtu.be/example-gnn"
badges:
  - "dataset-release"
  - "code-release"

---
