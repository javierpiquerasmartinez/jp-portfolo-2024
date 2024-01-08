import JavascriptIcon from '../components/icons/JavascriptIcon.astro';
import NodeJSIcon from '../components/icons/NodeJSIcon.astro';
import HTMLIcon from '../components/icons/HTMLIcon.astro';
import DenoIcon from '../components/icons/DenoIcon.astro';
import CSSIcon from '../components/icons/CSSIcon.astro';

export const TAGS = {
  NODEJS : {
    name: 'NodeJS',
    icon: NodeJSIcon,
    color: '#036e00'
  },
  JAVASCRIPT : {
    name: 'JavaScript',
    icon: JavascriptIcon,
    color: '#efd81d'
  },
  HTML5 : {
    name: 'HTML5',
    icon: HTMLIcon,
    color: '#dd4a24'
  },
  DENO : {
    name: 'Deno',
    icon: DenoIcon,
    color: '#000000'
  },
  CSS : {
    name: 'CSS',
    icon: CSSIcon,
    color: '#254add'
  }
}