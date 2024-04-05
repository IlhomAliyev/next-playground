import { GetServerSideProps } from "next";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";

interface IDynamicPageProps {
  // dehydratedState: DehydratedState;
}

const DynamicPage = ({}: IDynamicPageProps) => {
  const params = useParams();
  const id = params?.id;
  const { isReady } = useRouter();

  return <h1>ID Page</h1>;
};

export default DynamicPage;

export const getServerSideProps: GetServerSideProps = async ({
  params,
  locale,
}) => {
  const id = params?.id;

  return {
    props: {},
  };
};
