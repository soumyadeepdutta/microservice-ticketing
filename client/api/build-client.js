import axios from 'axios';

export default ({ req }) => {
  if (typeof window === 'undefined') {
    // requesting from server
    return axios.create({
      baseURL:
        'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
      headers: req.headers,
    });
  } else {
    // requesting from browser
    return axios.create({
      baseURL: '/',
    });
  }
};
