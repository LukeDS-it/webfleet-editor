import {useNavigate} from 'react-router-dom';
import Left from 'assets/left.png';
import Right from 'assets/right.png';
import './ExplorerBar.scss';

export function ExplorerBar(params: ExplorerBarParams) {

  const navigate = useNavigate();

  const realPath = params.currentPath.replace('~', '/');

  const tokenized = realPath
    .split('/')
    .filter((c) => c !== '');

  const breadcrumbs = tokenized
    .map((s, idx) => breadcrumb(`/projects/${params.domain}/pages/${buildPath(idx)}`, s));

  function breadcrumb(path: string, text: string) {
    return <li>
      <button onClick={() => navigate(path)}>{text}</button>
    </li>;
  }

  function buildPath(idx: number) {
    return tokenized
      .slice(0, idx + 1)
      .reduce((prev, curr) => `${prev}/${curr}`)
      .replace('/', '~');
  }

  function previous() {
    navigate(-1);
  }

  function next() {
    navigate(1);
  }

  return <div className={'exploreBar'}>
    <div className={'navBtns'}>
      <div className={'navButton'} onClick={previous}><img src={Left} alt={'Go back'}/></div>
      <div className={'navButton'} onClick={next}><img src={Right} alt={'Go forward'}/></div>
    </div>

    <ul className={'breadcrumbs'}>
      {breadcrumb(`/projects/${params.domain}/pages/`, `🏠`)}
      {breadcrumbs}
    </ul>
  </div>;
}

interface ExplorerBarParams {
  currentPath: string;
  domain: string;
}
