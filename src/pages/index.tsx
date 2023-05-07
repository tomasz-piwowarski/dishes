import Head from 'next/head';
import Form from '@/components/Form';
import { DishesData } from '@/types';
import useForm from '@/hooks/useForm';
import { useState } from 'react';
import Dishes from '@/components/Dishes/Dishes';

export default function Home() {
  const [dishes, setDishes] = useState<DishesData[]>([]);

  const { sendDishes } = useForm();

  const handleSubmit = async (values: DishesData) => {
    const response = await sendDishes(values);

    setDishes((prev) => [...prev, response]);
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Form onSubmit={handleSubmit} />
        <Dishes dishes={dishes} />
      </main>
    </>
  );
}
