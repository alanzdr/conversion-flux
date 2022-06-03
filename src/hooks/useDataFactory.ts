import { FluxResponses } from './../controllers/Response/types';
import { FluxBody } from 'controllers/Response/types';
import {
  Flow,
  Question,
  Library,
  RangeResponse,
  ExitType,
} from 'data/data.json';

interface Props {
  params: Library,
  flow: Flow[],
  responses: Library,
  questions: Question[],
  type: ExitType,
  routeKey: 'conclusion-a' | 'conclusion-b',
}

interface Factory {
  data: FluxBody
}

const useDataFactory = ({
  params,
  flow,
  responses,
  questions,
  type,
  routeKey,
} : Props) : Factory => {
  const allResponses: Library = { ...params };

  flow.forEach((flowItem) => {
    const question = questions.find(
        (questionItem) => questionItem.key === flowItem.question,
    );
    const response = responses[flowItem.key];
    if (question && response) {
      let value = '';
      switch (question.type) {
        case 'search':
        case 'textfield': {
          value = response;
          break;
        }
        case 'radio': {
          value = question.responses[Number(response)] as string;
          break;
        }
        case 'radio-range': {
          const { title, text } = question
              .responses[Number(response)] as RangeResponse;
          value = `${title} - ${text}`;
          break;
        }
        default:
          break;
      }
      if (value) {
        allResponses[question.key] = value;
      }
    }
  });

  const context = {
    pageName: document.title,
    pageUri: window.location.href,
  };

  const data: FluxBody = {
    responses: allResponses as unknown as FluxResponses,
    type,
    routeKey,
    context,
  };


  return {
    data,
  };
};

export default useDataFactory;
