import axios from 'axios';

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer ykXPDuv0Psgn_CqrZ3wSBnCKfWF-gHY6BpjqiT6nPynXaRudf_M5GxJmLAx69v9eZARgpJQ_kW913HomAauhD3CdgXvbGVoan0w_FN1yF7Ml2jnY9cfZC9l-8tKUXXYx'
    }
});