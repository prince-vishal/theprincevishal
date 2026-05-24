import DesignDocument from './DesignDocument';
import { getDesignPage } from '@/lib/design-pages';

export default async function DesignPage({ fileName }) {
  const page = await getDesignPage(fileName);

  return (
    <DesignDocument
      body={page.body}
      scripts={page.scripts}
      styles={page.styles}
    />
  );
}
