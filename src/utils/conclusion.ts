/* eslint-disable max-len */
import { Conclusion } from 'data/data.json';

type FlowResultType = 'whats' | 'content'
type Library = { [key: string]: string };

const WhatsMessages : Library = {
  'conclusion-01': 'Olá! Gostaria tirar algumas dúvidas sobre os produtos da Ahgora. Ainda não recebi a proposta. Já possuo ponto, minha empresa tem de 0 a 10 colaboradores, e eu gostaria de contratar a batida de ponto por REP.',
  'conclusion-02': 'Olá! Gostaria tirar algumas dúvidas sobre os produtos da Ahgora. Ainda não recebi a proposta. Já possuo ponto, minha empresa tem de 0 a 10 colaboradores, e eu gostaria de contratar a batida de ponto online.',
  'conclusion-03': 'Olá! Gostaria tirar algumas dúvidas sobre os produtos da Ahgora. Ainda não recebi a proposta. Já possuo ponto, minha empresa tem de 11 a 20 colaboradores, e eu gostaria de contratar a batida de ponto por REP.',
  'conclusion-04': 'Olá! Gostaria tirar algumas dúvidas sobre os produtos da Ahgora. Ainda não recebi a proposta. Já  possuo ponto, minha empresa tem de 11 a 20 colaboradores, e eu gostaria de contratar a batida de ponto online.',
  'conclusion-05': 'Olá! Gostaria tirar algumas dúvidas sobre os produtos da Ahgora. Ainda não recebi a proposta. Busco por segurança jurídica ou fiscal, minha empresa tem de 0 a 10 colaboradores, e eu gostaria de contratar a por relógio eletrônico.',
  'conclusion-06': 'Olá! Gostaria tirar algumas dúvidas sobre os produtos da Ahgora. Ainda não recebi a proposta. Busco por segurança jurídica ou fiscal, minha empresa tem de 0 a 10 colaboradores, e eu gostaria de contratar a batida de ponto online.',
  'conclusion-07': 'Olá! Gostaria tirar algumas dúvidas sobre os produtos da Ahgora. Ainda não recebi a proposta. Busco por segurança jurídica ou fiscal, minha empresa tem de 11 a 20 colaboradores, e eu gostaria de contratar a por relógio eletrônico.',
  'conclusion-08': 'Olá! Gostaria tirar algumas dúvidas sobre os produtos da Ahgora. Ainda não recebi a proposta. Busco por segurança jurídica ou fiscal, minha empresa tem de 11 a 20 colaboradores, e eu gostaria de contratar a batida de ponto online.',
  'conclusion-09': 'Olá! Gostaria tirar algumas dúvidas sobre os produtos da Ahgora. Ainda não recebi a proposta. Não possuo ponto, minha empresa tem de 0 a 10 colaboradores, e eu gostaria de contratar a batida de ponto por REP.',
  'conclusion-10': 'Olá! Gostaria tirar algumas dúvidas sobre os produtos da Ahgora. Ainda não recebi a proposta. Não possuo ponto, minha empresa tem de 0 a 10 colaboradores, e eu gostaria de contratar a batida de ponto online.',
  'conclusion-11': 'Olá! Gostaria tirar algumas dúvidas sobre os produtos da Ahgora. Ainda não recebi a proposta. Não possuo ponto, minha empresa tem de 11 a 20 colaboradores, e eu gostaria de contratar a batida de ponto por REP.',
  'conclusion-12': 'Olá! Gostaria tirar algumas dúvidas sobre os produtos da Ahgora. Ainda não recebi a proposta. Não possuo ponto, minha empresa tem de 11 a 20 colaboradores, e eu gostaria de contratar a batida de ponto online.',
  'conclusion-13': 'Olá! Gostaria tirar algumas dúvidas sobre os produtos da Ahgora. Ainda não recebi a proposta. Busco por inovação, não possuo ponto, minha empresa tem de 0 a 10 colaboradores, e eu gostaria de contratar a batida de ponto relógio biométrico.',
  'conclusion-14': 'Olá! Gostaria tirar algumas dúvidas sobre os produtos da Ahgora. Ainda não recebi a proposta. Busco por inovação, não possuo ponto, minha empresa tem de 0 a 10 colaboradores, e eu gostaria de contratar a batida de ponto online.',
  'conclusion-15': 'Olá! Gostaria tirar algumas dúvidas sobre os produtos da Ahgora. Ainda não recebi a proposta. Busco por inovação, não possuo ponto, minha empresa tem de 11 a 20 colaboradores, e eu gostaria de contratar a batida de ponto relógio biométrico.',
  'conclusion-16': 'Olá! Gostaria tirar algumas dúvidas sobre os produtos da Ahgora. Ainda não recebi a proposta. Busco por inovação, não possuo ponto, minha empresa tem de 11 a 20 colaboradores, e eu gostaria de contratar a batida de ponto online.',
};

const getWhatsRedirect = (key: string) : string => {
  const message = WhatsMessages[key] || WhatsMessages['conclusion-01'];
  const phone = '5548999321187';
  return `https://api.whatsapp.com/send?phone=${phone}&text=${message}`;
};

const FileNames : Library = {
  'conclusion-01': 'efic-op-rep-0_10.pdf',
  'conclusion-02': 'efic-op-online-0_10.pdf',
  'conclusion-03': 'efic-op-rep-11_20.pdf',
  'conclusion-04': 'efic-op-online-11_20.pdf',
  'conclusion-05': 'seg-jur-rep-0_10.pdf',
  'conclusion-06': 'seg-jur-fis-online-0_10.pdf',
  'conclusion-07': 'seg-jur-rep-11_20.pdf',
  'conclusion-08': 'seg-jur-fis-online-11_20.pdf',
  'conclusion-09': 'efic-op-rep-0_10.pdf',
  'conclusion-10': 'efic-op-online-0_10.pdf',
  'conclusion-11': 'efic-op-rep-11_20.pdf',
  'conclusion-12': 'efic-op-online-11_20.pdf',
  'conclusion-13': 'inova-rep-0_10.pdf',
  'conclusion-14': 'inova-online-0_10.pdf',
  'conclusion-15': 'inova-rep-11_20.pdf',
  'conclusion-16': 'inova-online-11_20.pdf',
};

const getContentRedirect = (key: string) : string => {
  const name = FileNames[key] || FileNames['conclusion-01'];
  return `assets/apps/${name}`;
};

export const getRedirectURL = (type: FlowResultType, key: string) : string => {
  if (type === 'whats') {
    return getWhatsRedirect(key);
  } else {
    return getContentRedirect(key);
  }
};

export const getConclusionResult = (
    conclusions: Conclusion[],
    key: string,
) : (Conclusion | undefined
) => conclusions.find((conclusion) => conclusion.key === key);
