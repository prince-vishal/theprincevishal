import DesignPage from '@/components/DesignPage';

export const metadata = {
  title: 'Note №.404  -  this page is still cooking · Prince Sinha',
  robots: {
    index: false,
  },
};

export default function NotFound() {
  return <DesignPage fileName="404.html" />;
}
