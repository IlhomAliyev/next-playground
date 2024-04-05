import { OpenGraphHead } from "@/components/OpenGraphHead";
import { IGetProductsResponse, IProduct } from "@/types/ITestData.type";
import { GetStaticPaths, GetStaticProps } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const Test = ({ data }: { data: IProduct }) => {
  console.log("data inside page : ", data);

  const image = data?.images[0];

  return (
    <>
      <OpenGraphHead imageURL={image} />
      <h1 className="text-3xl font-bold text-center mt-10">Test</h1>
    </>
  );
};

export default Test;

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(BASE_URL + "/products");
  const data: IGetProductsResponse = await response.json();

  const paths = data.products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  console.log("paths", paths);

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<{ data: IProduct }> = async ({
  params,
}) => {
  const id = params?.id;
  console.log("id inside getStaticProps : ", id);

  const response = await fetch(BASE_URL + `/products/${id}`);
  const data: IProduct = await response.json();

  console.log("data inside getStaticProps : ", data);

  return { props: { data } };
};
