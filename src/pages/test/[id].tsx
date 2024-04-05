import { OpenGraphHead } from "@/components/OpenGraphHead";
import { IGetProductsResponse, IProduct } from "@/types/ITestData.type";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const Test = ({ data }: { data: IProduct }) => {
  console.log("data inside page : ", data);

  return (
    <>
      <OpenGraphHead imageURL={data?.images[0]} />
      <h1 className="mt-10 text-center text-3xl font-bold">Test Page</h1>
      <div>
        <p>{data?.id}</p>
        <p>{data?.title}</p>
        <p>{data?.description}</p>
        <p>{data?.price}</p>
        <p>{data?.discountPercentage}</p>
        <p>{data?.rating}</p>
        <p>{data?.stock}</p>
        <p>{data?.brand}</p>
        <p>{data?.category}</p>

        <Image src={data?.thumbnail} alt={data?.title} />

        <div className="mx-auto mt-10 grid w-full max-w-6xl grid-cols-3 items-center justify-center gap-4 p-4">
          {data?.images.map((image) => (
            <Image key={image} src={image} alt={data?.title} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Test;

// export const getStaticPaths: GetStaticPaths = async () => {
//   const response = await fetch(BASE_URL + "/products");
//   const data: IGetProductsResponse = await response.json();

//   const paths = data.products.map((product) => ({
//     params: { id: product.id.toString() },
//   }));

//   console.log("paths", paths);

//   return { paths, fallback: true };
// };

// export const getStaticProps: GetStaticProps<{ data: IProduct }> = async ({
//   params,
// }) => {
//   const id = params?.id;
//   console.log("id inside getStaticProps : ", id);

//   const response = await fetch(BASE_URL + `/products/${id}`);
//   const data: IProduct = await response.json();

//   console.log("data inside getStaticProps : ", data);

//   return { props: { data } };
// };

export const getServerSideProps: GetServerSideProps<{ data: IProduct }> = async ({
  params,
}) => {
  const id = params?.id;
  console.log("id inside getStaticProps : ", id);

  const response = await fetch(BASE_URL + `/products/${id}`);
  const data: IProduct = await response.json();

  console.log("data inside getStaticProps : ", data);

  return { props: { data } };
};
