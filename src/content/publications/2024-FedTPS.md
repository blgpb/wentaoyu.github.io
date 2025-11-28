---
title: "Traffic Pattern Sharing for Federated Traffic Flow Prediction with Personalization"
venue: "ICDM"
year: 2024
authors:
  - "Hang Zhou"
  - "Wentao Yu"
  - "Sheng Wan"
  - "Yongxin Tong"
  - "Tianlong Gu"
  - "Chen Gong"
summary: "A FL framework termed “personalized Federated learning with Traffic Pattern Sharing” (FedTPS) to solve federated Traffic Flow Prediction problem."
abstract: "This paper develops a new FL framework termed “personalized Federated learning with Traffic Pattern Sharing” (FedTPS) to solve federated TFP problem. Our FedTPS critically exploits the underlying common traffic patterns (e.g., morning and evening rush hours) shared across different city regions and meanwhile maintaining the region-specific data characteristics in a personalized FL manner. Specifically, to extract the common traffic patterns, we decompose the traffic data in each client via using discrete wavelet transform, where the low-frequency components uncover the stable traffic dynamics of different regions and thus can be considered as the common traffic patterns. These common patterns are then shared among different clients through traffic pattern repositories on the server side to aid the global collaborative traffic flow modeling. Moreover, the model components capturing spatial-temporal dependencies in traffic data are retained for local training, thereby enabling personalized learning based on regional characteristics. Intensive experiments on four real-world traffic datasets firmly demonstrate the superiority of our proposed FedTPS over other compared typical FL methods in terms of various estimation errors."
topics:
  - "Graph Federated Learning"
  - "Federated Traffic Prediction"
awards: 
  - "ICDM Best Student Paper Runner-Up Award"
featured: false
links:
  pdf: "https://ieeexplore.ieee.org/abstract/document/10884295/"
  # arxiv: "https://arxiv.org/abs/2310.12345"
  # project: "https://trustworthy-fl.ai"
  # slides: "https://example.com/slides/trustworthy-fl.pdf"
  code: "https://github.com/lichuan210/FedTPS"
  # video: "https://youtu.be/example-trust"
badges:
  - "artifact-evaluated"
  - "code-release"

---
