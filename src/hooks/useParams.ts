import { useState, useEffect, useMemo } from 'react';

import { Library, Credetials } from 'data/data.json';

interface ParamsHook {
  params: Library | undefined
}

const useParams = (credetials: Credetials) : ParamsHook => {
  const [params, setParams] = useState<Library>();

  const itemKey = useMemo(
      () => `flow-${credetials.name}-${credetials.version}-querys`,
      [credetials],
  );

  useEffect(() => {
    let querys : Library = {};

    const getSavedVariables = () => {
      const values = localStorage.getItem(itemKey);
      if (values) {
        const obj = JSON.parse(values);
        querys = { ...querys, ...obj };
      }
    };

    const getQueryVariables = () => {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const keys = urlParams.keys() as unknown as string[];
      for (const key of keys) {
        const value = urlParams.get(key);
        if (value) {
          querys[key] = value;
        }
      };
    };

    getSavedVariables();
    getQueryVariables();

    setParams(querys);
  }, []);

  useEffect(() => {
    if (!params) return;

    const values = JSON.stringify(params);
    localStorage.setItem(itemKey, values);
  }, [params]);

  return { params };
};

export default useParams;
