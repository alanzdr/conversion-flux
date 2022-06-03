import Axios from 'axios';

import {
  HubspotContext,
  HubspotFields,
} from './types';

const HubspotFormApi = () => {
  const registerForm = async (
      fields: HubspotFields[],
      context: HubspotContext,
  ) => {
    try {
      const BASE_URL = 'https://api.hsforms.com/submissions/v3/integration/submit';
      const portalId = process.env.HUBSPOT_FORM_PORTALID;
      const formGuid = process.env.HUBSPOT_FORM_FORMID;
      const data = {
        submittedAt: (new Date()).getTime(),
        fields,
        context,
      };
      await Axios.post(`${BASE_URL}/${portalId}/${formGuid}`, data);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    registerForm,
  };
};

export default HubspotFormApi;
