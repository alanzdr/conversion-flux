import { NextApiRequest, NextApiResponse } from 'next';

import { getRedirectURL } from 'utils/conclusion';
import { FluxBody } from './types';
import hubspotFormService from 'services/Hubspot/Form';
import { getRequestIp } from 'utils/request';

const ResponseController = () => {
  const hubspot = hubspotFormService();

  const getEventName = (type: string) => {
    if (type === 'whats') {
      return 'Whastapp';
    }
    return 'Proposta';
  };

  const sendToHubspot = async (data: FluxBody, ipAddress: string) => {
    const { context, responses } = data;
    const eventName = getEventName(data.type);

    const fields = [
      {
        name: 'email',
        value: responses.email,
      },
      {
        name: 'cnpj_conversao',
        value: responses.cnpj ?? '',
      },
      {
        name: 'fluxo_automatizado__utilizacao_de_sistema_de_ponto',
        value: responses.useSystem || '',
      },
      {
        name: 'fluxo_automatizado__problemas_ou_necessidade_do_atual_sistema',
        value: responses.problemCurrent || '',
      },
      {
        name: 'fluxo_automatizado__problema_por_nao_ter_sistema_de_ponto',
        value: responses.problemForNotHaving || '',
      },
      {
        name: 'fluxo_automatizado__sabe_qual_funcionalidade_que_sente_falta',
        value: responses.missingFunction || '',
      },
      {
        name: 'fluxo_automatizado__sente_falta_da_funcionalidade',
        value: responses.missingFunctionDetail || '',
      },
      {
        name: 'fluxo_automatizado__nivel_de_prioridade_do_problema',
        value: responses.priorityLevel || '',
      },
      {
        name: 'fluxo_automatizado__numero_de_colaboradores',
        value: responses.employees || '',
      },
      {
        name: 'fluxo_automatizado__decisor',
        value: responses.decisionmaker || '',
      },
      {
        name: 'fluxo_automatizado__melhor_forma_de_registro_de_ponto',
        value: responses.registrationForm || '',
      },
      {
        name: 'fluxo_automatizado__conclusao',
        value: eventName,
      },
    ];

    await hubspot.registerForm(fields, {
      ...context,
      ipAddress,
    });
  };

  const store = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const data = req.body as FluxBody;
      const ip = getRequestIp(req);

      const next = getRedirectURL(data.type, data.routeKey);
      await sendToHubspot(data, ip);

      return res.send({
        error: false,
        next,
      });
    } catch (error) {
      console.error(error);
      return res.status(400).send({
        error: true,
      });
    }
  };

  return {
    store,
  };
};

export default ResponseController;
