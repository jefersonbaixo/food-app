import axios from 'axios';

export default axios.create({
  baseURL: `https://api.yelp.com/v3/businesses`,
  headers: {
    Authorization: `Bearer 4nmY3bC1L1u5nWejXC5q62AJCHtQFmZTo-oIDpVife6YbhiWPk_lSm3y_odfwRMBxq_iHqwxDUztqysN2ODktYgtI_Q3TGxcNN2HaqvoPbKlowgASJV1wee9A-hrX3Yx`,
  },
});
