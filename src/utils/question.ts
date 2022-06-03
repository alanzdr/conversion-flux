import {
  Question,
  Flow,
  ResultType,
  Library,
} from 'data/data.json';

export const getResultValue = (
    flow: Flow,
    value: string,
) : { next: string, type: ResultType } => {
  const { exceptions } = flow.result;
  if (exceptions) {
    const exception = exceptions.find((excep) => {
      if (Array.isArray(excep.response)) {
        return excep.response.includes(value);
      }
      return excep.response === value;
    });
    if (exception) {
      return {
        next: exception.next,
        type: exception.type,
      };
    }
  }
  const { result } = flow;
  return {
    next: result.next,
    type: result.default,
  };
};

export const flowFactory = (
    flows: Flow[],
    responses: Library,
) : Flow[] => {
  const keys: string[] = [];

  const next = (key: string) : void => {
    keys.push(key);

    const question = flows.find((value) => value.key === key);
    if (!question) return;

    const response = responses[question.key];
    if (response) {
      const exception = question.result.exceptions.find((excep) => {
        if (Array.isArray(excep.response)) {
          return excep.response.includes(response);
        }
        return excep.response === response;
      });
      if (exception && exception.type === 'continue') {
        next(exception.next);
      } else if (question.result.default === 'continue') {
        next(question.result.next);
      }
    }
  };

  const first = flows.find((value) => value.order === 0);

  if (first) {
    next(first.key);
  }

  const filteredFlows = flows.filter((question) => {
    if (question.order === 0) return true;
    if (keys.includes(question.key)) return true;
    return false;
  });

  return filteredFlows;
};

export const getResponse = <T>(question: Question) : T =>
  question.responses as unknown as T;

export const getParamsResponse = (
    params: Library,
    flow: Flow[],
) : Library => {
  const values : Library = {};
  flow.forEach((question) => {
    if (params[question.key]) {
      values[question.key] = params[question.key];
    }
  });
  return values;
};
